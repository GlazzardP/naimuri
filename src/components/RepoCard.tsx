import { Dispatch, SetStateAction, useState } from "react";
import { IOctoParams, IRepo } from "../pages/Landing";
import { ButtonWrapper, RepoDetailsWrapper } from "../styles";
import Button from "./Button";
import Modal from "./Modal";
const { Octokit } = require("@octokit/rest");

export const octokit = new Octokit({
  auth: `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`,
});

interface IRepoCard {
  data: IRepo;
  active: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
}
const RepoCard = ({ data, active, setActiveCard }: IRepoCard) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [readMe, setReadMe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getReadme = async () => {
    // let name = data.name;
    // let login = (data as any).owner.login;
    // console.log({ name, login });
    // let res = await octokit.repos.getReadme(login, name);
    // await octokit.repos
    //   .getReadme(octoParams)
    //   .then((response: any) => {
    //     const decodedContent = atob(response.data.content.replace(/\s/g, ""));
    //     console.log(decodedContent);
    //     setReadMe(decodedContent);
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });
    // console.log({ res });
    return;
  };

  const handleActiveCard = (name: string) =>
    active === name ? setActiveCard("") : setActiveCard(data.name);

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      {/* <Modal isOpen={showModal} onClose={handleCloseModal}>
        <h2>Read Me</h2>
        {readMe}
      </Modal> */}
      <RepoDetailsWrapper key={data.name} open={active === data.name}>
        <span onClick={() => handleActiveCard(data.name)}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </span>
        <div className="content">
          <ul>
            <li>Stars: {data.stargazers_count}</li>
            <li>Forks: {data.forks_count}</li>
            <li>Issues: {data.open_issues_count}</li>
            <li>Language: {data.language}</li>
            <li>Watchers: {data.watchers_count}</li>
          </ul>
          <span>
            <Button onClick={getReadme} btnText="Get Read Me" primary />
            <a href={data.html_url} target="_blank" rel="noreferrer">
              <ButtonWrapper primary={false}>Link to Repo</ButtonWrapper>
            </a>
          </span>
        </div>
      </RepoDetailsWrapper>
    </>
  );
};

export default RepoCard;
