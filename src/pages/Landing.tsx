const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: `${process.env.REACT_APP_OCTOKIT_TOKEN}`,
});

const Landing = () => {
  return <p>Landing</p>;
};

export default Landing;
