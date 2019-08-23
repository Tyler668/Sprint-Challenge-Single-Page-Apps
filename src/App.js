import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import { logValidationWarning } from "jest-validate/build/utils";


export default function App() {
  return (
    <main>
      <Header />
      {/* <CharacterList/> */}
      <LocationsList/>
      {/* <TabNav /> */}
    </main>
  );
}
