import { useEffect, useState } from "react";
import Filters from "../containers/Filters";
import Repos from "../containers/Repos";
import { LandingWrapper } from "../styles";

const { Octokit } = require("@octokit/rest");

export const octokit = new Octokit({
  auth: `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`, // .env normally
});

/* 
 counts for stars, forks, likes and issues per repository. For Interface
*/

export interface IRepo {
  name: string;
  owner: string;
  repo: string;
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
  minStars: number | null;
  maxStars: number | null;
  minForks: number | null;
  maxForks: number | null;
  language: string;
}
const Landing = () => {
  // GET OCTO DATA
  const [octoParams, setOctoParams] = useState<IOctoParams>({
    owner: "facebook",
    repo: "",
    minStars: null,
    maxStars: null,
    minForks: null,
    maxForks: null,
    language: "",
  });
  const [repositories, setRepositories] = useState<IRepo[]>([]);

  const getOwnerRepos = async () => {
    await octokit.repos
      .listForUser({
        username: octoParams.owner,
        // repo: octoParams.repo,
      })
      .then((response: any) => {
        let responses: IRepo[] = response.data;

        if (octoParams.minStars) {
          console.log("Min Stars");

          responses = responses.filter(
            (repo: IRepo) => repo.stargazers_count > octoParams.minForks!
          );
        }
        if (octoParams.maxStars) {
          console.log("Max Stars");

          responses = responses.filter(
            (repo: IRepo) => repo.stargazers_count < octoParams.maxStars!
          );
        }
        if (octoParams.minForks) {
          console.log("Min Forks");

          responses = responses.filter(
            (repo: IRepo) => repo.forks_count > octoParams.minForks!
          );
        }

        if (octoParams.maxForks) {
          console.log("Max Forks");

          responses = responses.filter(
            (repo: IRepo) => repo.forks_count < octoParams.maxForks!
          );
        }

        if (octoParams.language !== "") {
          console.log("Language");

          responses = responses.filter(
            (repo: IRepo) => repo.language === octoParams.language!
          );
        }

        console.log({ responses });

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
    <LandingWrapper>
      <Filters
        octoParams={octoParams}
        setOctoParams={setOctoParams}
        getOwnerRepos={getOwnerRepos}
      />
      <Repos repositories={repositories} />
    </LandingWrapper>
  );
};

export default Landing;
