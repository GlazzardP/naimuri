import React from "react";
import Landing from "./pages/Landing";
import { FooterWrapper, HeaderWrapper } from "./styles";

function App() {
  return (
    <>
      <HeaderWrapper>
        <h1>OctoKit/Github Repo Search Tool</h1>
      </HeaderWrapper>
      <Landing />
      <FooterWrapper>
        <h2>Paul Glazzard - Tech Test - Naimuri</h2>
      </FooterWrapper>
    </>
  );
}

export default App;
