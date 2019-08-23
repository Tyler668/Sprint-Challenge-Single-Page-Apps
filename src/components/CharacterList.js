import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  const [charsInfo, setCharsInfo] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results);
        const charList = res.data.results;
        setCharsInfo(charList);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {charsInfo.map(item => (
        <CharacterCard info={item} />
      ))};
    </section>
  );
}
