import { Dispatch, SetStateAction, useState } from "react";
import { IRepo, octokit } from "../pages/Landing";
import { ButtonWrapper, RepoDetailsWrapper } from "../styles";
import Button from "./Button";

interface IRepoCard {
  data: IRepo;
  active: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
}
const RepoCard = ({ data, active, setActiveCard }: IRepoCard) => {
  const [readMe, setReadMe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getReadme = async () => {
    setLoading(true);
    let res = await octokit.repos.getReadme(data.owner, data.repo);
    setReadMe(res);
    setLoading(false);
  };

  const handleActiveCard = (name: string) =>
    active === name ? setActiveCard("") : setActiveCard(data.name);

  return (
    <RepoDetailsWrapper
      key={data.name}
      open={active === data.name}
      onClick={() => handleActiveCard(data.name)}
    >
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div className="content">
        <ul>
          <li>Stars: {data.stargazers_count}</li>
          <li>Forks: {data.forks_count}</li>
          <li>Issues: {data.open_issues_count}</li>
          <li>Language: {data.language}</li>
          <li>Watchers: {data.watchers_count}</li>
        </ul>
      </div>
      <span>
        <Button
          onClick={getReadme}
          btnText="Get Read Me"
          loading={loading}
          primary
        />
        <a href={data.html_url} target="_blank" rel="noreferrer">
          <ButtonWrapper primary={false}>Link to Repo</ButtonWrapper>
        </a>
      </span>
    </RepoDetailsWrapper>
  );
};

export default RepoCard;
