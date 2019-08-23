import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";


export default function LocationsList() {
    const [locationsInfo, setLocationsInfo] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        console.log(res.data.results);
        const locationList = res.data.results;
        setLocationsInfo(locationList);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locationsInfo.map(item => (
        <LocationCard info={item} key = {item.id}/>
      ))};
    </section>
  );
}
