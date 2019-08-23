import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import { logValidationWarning } from "jest-validate/build/utils";
import EpisodeList from "./components/EpisodeList";
import styled from 'styled-components';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import WelcomePage from './components/WelcomePage'

const Main = styled.main`
background: #1b5c47;
`;




export default function App() {
  return (
    <Router>
      <Main>
      <TabNav/>
        <Header />'
        
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route exact path="/characters" render={props => <CharacterList {...props} characters={CharacterList}/>} />
      <Route exact path="/locations" render={props => <LocationsList {...props} locations={LocationsList}/>} />
      <Route exact path="/episodes" render={props => <EpisodeList {...props} episodes={EpisodeList}/>} />

      </Main>
    </Router>

  );
}
