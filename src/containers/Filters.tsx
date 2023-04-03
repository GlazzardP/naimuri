import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { IOctoParams } from "../pages/Landing";
import { FiltersWrapper, LabelWrapper } from "../styles";

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
    <FiltersWrapper>
      <LabelWrapper>
        Owner
        <Input
          name="owner"
          type="text"
          placeholder="Owner Name"
          value={octoParams.owner}
          onChange={updateFilters}
        />
      </LabelWrapper>

      <LabelWrapper>
        Repo
        <Input
          name="repo"
          type="text"
          placeholder="Repo Name"
          value={octoParams.repo}
          onChange={updateFilters}
        />
      </LabelWrapper>

      <LabelWrapper>
        Min Stars
        <Input
          name="minStars"
          type="text"
          placeholder="Min Stars"
          value={octoParams.minStars || ""}
          onChange={updateFilters}
        />
      </LabelWrapper>

      <LabelWrapper>
        Max Stars
        <Input
          name="maxStars"
          type="text"
          placeholder="Max Stars"
          value={octoParams.maxStars || ""}
          onChange={updateFilters}
        />
      </LabelWrapper>

      <LabelWrapper>
        Min Forks
        <Input
          name="minForks"
          type="text"
          placeholder="Min Forks"
          value={octoParams.minForks || ""}
          onChange={updateFilters}
        />
      </LabelWrapper>

      <LabelWrapper>
        Max Forks
        <Input
          name="maxForks"
          type="text"
          placeholder="Max Forks"
          value={octoParams.maxForks || ""}
          onChange={updateFilters}
        />
      </LabelWrapper>
      <LabelWrapper>
        Language
        <Input
          name="language"
          type="text"
          placeholder="Language"
          value={octoParams.language}
          onChange={updateFilters}
        />
      </LabelWrapper>
      <Button
        onClick={getOwnerRepos}
        btnText="Search"
        loading={false}
        primary
      />
    </FiltersWrapper>
  );
};

export default Filters;
