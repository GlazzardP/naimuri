import { IRepo } from "../pages/Landing";

interface IRepos {
  repositories: IRepo[];
}

const Repos = ({ repositories }: IRepos) => {
  // Receive an array of repos -> Display to user
  // Add loader/error handler if no data
  const repositoriesJsx = repositories.length ? (
    repositories.map((repo: any) => {
      return (
        <div>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="content">
            <ul>
              <li>Stars: {repo.stargazers_count}</li>
              <li>Forks: {repo.forks_count}</li>
              <li>Issues: {repo.open_issues_count}</li>
              <li>Language: {repo.language}</li>
              <li>Watchers: {repo.watchers_count}</li>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Link to Repo
              </a>
            </ul>
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading</p>
  );

  return (
    <>
      <h2>Repos</h2>

      {repositoriesJsx}
    </>
  );
};

export default Repos;
