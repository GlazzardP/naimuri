import { useState } from "react";
import RepoCard from "../components/RepoCard";
import { IRepo } from "../pages/Landing";
import { RepoListWrapper } from "../styles";

interface IRepos {
  repositories: IRepo[];
}

const Repos = ({ repositories }: IRepos) => {
  const [activeCard, setActiveCard] = useState("");
  // Receive an array of repos -> Display to user
  // Add loader/error handler if no data
  const repositoriesJsx = repositories.length ? (
    repositories.map((repo: IRepo) => (
      <RepoCard data={repo} active={activeCard} setActiveCard={setActiveCard} />
    ))
  ) : (
    <p>Loading</p>
  );

  return (
    <>
      <h2>Repos</h2>
      <RepoListWrapper>{repositoriesJsx}</RepoListWrapper>
    </>
  );
};

export default Repos;
