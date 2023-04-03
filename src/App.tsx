import React from "react";
import Landing from "./pages/Landing";
import {
  ContentColumn,
  FooterWrapper,
  HeaderWrapper,
  PageWrapper,
} from "./styles";

function App() {
  return (
    <>
      <HeaderWrapper>
        <ContentColumn>
          <h1>OctoKit/Github Repo Search Tool</h1>
        </ContentColumn>
      </HeaderWrapper>
      <PageWrapper>
        <Landing />
      </PageWrapper>
      <FooterWrapper>
        <ContentColumn>
          <h2>Paul Glazzard - Tech Test - Naimuri</h2>
        </ContentColumn>
      </FooterWrapper>
    </>
  );
}

export default App;
