import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { IOctoParams } from "../pages/Landing";

interface IFilters {
  setOctoParams: Dispatch<SetStateAction<IOctoParams>>;
  octoParams: IOctoParams;
  getOwnerRepos: any;
}
const Filters = ({ setOctoParams, octoParams, getOwnerRepos }: IFilters) => {
  const updateFilters = (e: ChangeEvent<HTMLInputElement>) => {
    setOctoParams((prevState: IOctoParams) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <label
        htmlFor="
"
      >
        Owner
        <Input
          name="owner"
          type="text"
          placeholder="Owner Name"
          value={octoParams.owner}
          onChange={updateFilters}
        />
      </label>
      <label htmlFor="">
        Repo
        <Input
          name="repo"
          type="text"
          placeholder="Repo Name"
          value={octoParams.owner}
          onChange={updateFilters}
        />
      </label>

      <label htmlFor="">
        Min Stars
        <Input
          name="minStars"
          type="text"
          placeholder="Min Stars"
          value={octoParams.owner}
          onChange={updateFilters}
        />
      </label>

      <label htmlFor="">
        Max Stars
        <Input
          name="maxStars"
          type="text"
          placeholder="Max Stars"
          value={octoParams.owner}
          onChange={updateFilters}
        />
      </label>
      <Button onClick={getOwnerRepos} btnText="Search" loading={false} />
    </>
  );
};

export default Filters;
