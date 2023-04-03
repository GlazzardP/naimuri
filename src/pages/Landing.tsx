import { useEffect, useState } from "react";
import Filters from "../containers/Filters";
import Repos from "../containers/Repos";

const { Octokit } = require("@octokit/rest");
console.log(`${process.env.REACT_APP_OCTOKIT_TOKEN}`);

const octokit = new Octokit({
  auth: `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`,
});

/* 
 counts for stars, forks, likes and issues per repository. For Interface
*/

export interface IRepo {
  name: string;
  owner: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  watchers_count: number;
  language: string;
}

export interface IOctoParams {
  owner: string;
  repo: string;
  minStars?: number;
  maxStars?: number;
  minForks?: number;
  maxForks?: number;
}
const Landing = () => {
  // GET OCTO DATA
  const [octoParams, setOctoParams] = useState<IOctoParams>({
    owner: "facebook",
    repo: "react",
  });
  const [repositories, setRepositories] = useState<IRepo[]>([]);

  const getOwnerRepos = async () => {
    // const queryParams: any = {
    //   per_page: 100, // maximum number of results per page
    //   sort: "updated", // sort by most recently updated
    //   direction: "desc", // sort in descending order
    // };

    // console.log({ queryParams });

    await octokit.repos
      .listForUser({
        username: octoParams.owner,
        // ...queryParams,
      })
      .then((response: any) => {
        console.log("a", response.data);

        let responses: IRepo[] = response.data;

        console.log({ octoParams });

        if (octoParams.minStars !== undefined) {
          responses.filter(
            (repo: IRepo) => repo.stargazers_count > octoParams.minForks!
          );
        }
        if (octoParams.maxStars !== undefined) {
          responses.filter(
            (repo: IRepo) => repo.stargazers_count < octoParams.maxStars!
          );
        }
        if (octoParams.minForks !== undefined) {
          responses.filter(
            (repo: IRepo) => repo.forks_count > octoParams.minForks!
          );
        }

        if (octoParams.maxForks !== undefined) {
          responses.filter(
            (repo: IRepo) => repo.forks_count < octoParams.maxForks!
          );
        }

        setRepositories(responses);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOwnerRepos();
  }, []);
  return (
    <>
      <Filters
        octoParams={octoParams}
        setOctoParams={setOctoParams}
        getOwnerRepos={getOwnerRepos}
      />
      <Repos repositories={repositories} />
    </>
  );
};

export default Landing;
