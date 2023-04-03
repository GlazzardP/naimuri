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
const Landing = () => {
  // GET OCTO DATA
  const [octoParams, setOctoParams] = useState({
    owner: "facebook",
    repo: "react",
    // minStars: 0,
    // maxStars: 999999999,
  });
  const [repositories, setRepositories] = useState<IRepo[]>([]);

  const getOwnerRepos = async () => {
    await octokit.repos
      .listForUser({
        username: octoParams.owner,
      })
      .then((response: any) => {
        console.log("a", response.data);
        setRepositories(response.data);
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
      <Filters />
      <Repos repositories={repositories} />
    </>
  );
};

export default Landing;
