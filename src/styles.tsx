import styled, { keyframes } from "styled-components";
// Theme Colours
const navy = "rgb(4, 14, 25)";
const lightNavy = "rgb(4, 14, 25, 0.8)";

const orange = "rgb(239, 126, 57);";

const gap = "8px";

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;
export const InputWrapper = styled.input`
  border: solid ${navy} 1px;
  border-radius: 5px;
  padding: ${gap};
`;

export interface ISCButton {
  primary: boolean;
}
export const ButtonWrapper = styled.button<ISCButton>`
  border: none;
  padding: 1rem;
  ${({ primary }) =>
    primary
      ? `
  background: ${navy}
  color: ${orange};
  `
      : `
        background: ${orange}
        color: ${navy};
  `}
  border-radius: ${gap};
  transition: all 0.3s;

  font-weight: 500;

  :hover {
    cursor: pointer;
    background: ${lightNavy};
  }
`;

export const Column = styled.div`
  max-width: clamp(90vw, 90vw, 1400px);
  margin: auto;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: ${navy};
  h1 {
    color: ${orange};
    text-align: left;
  }
`;

export const FooterWrapper = styled.footer`
  padding: 1rem;
  margin-top: auto;
  background: ${navy};

  h2 {
    color: ${orange};
  }
`;

export interface iSCOpen {
  open: boolean;
}
export const RepoDetailsWrapper = styled.div<iSCOpen>`
  border-radius: 10px;
  width: 100%;
  transition: all 0.3s;

  span:first-child {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  p {
    margin-top: ${gap};
  }

  .content {
    border-radius: 10px;
    padding-inline: 10px;

    background: white;
    max-height: ${({ open }) => (open ? "250px" : "0")};
    overflow-y: hidden;

    li {
      margin-top: 1rem;
    }
  }

  span {
    display: flex;
    gap: ${gap};
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid ${navy};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 0.6s linear infinite;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LandingWrapper = styled.section`
  padding: 1rem;
  @media only screen and (min-width: 800px) {
    display: flex;
    gap: 2rem;
  }
`;
export const RepoContainer = styled.div`
  width: 100%;
`;
export const RepoListWrapper = styled.div`
  max-height: 60vh;
  overflow-y: scroll;

  @media only screen and (min-width: 800px) {
    max-height: 75vh;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap};
  @media only screen and (min-width: 800px) {
    width: 40%;
  }
`;

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1400px;
  margin: auto;
`;

export const ContentColumn = styled.div`
  max-width: 1400px;
  margin: auto;
`;
