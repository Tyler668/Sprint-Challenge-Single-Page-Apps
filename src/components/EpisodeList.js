import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";
import ServerError from "./ServerError";
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';

export default function EpisodeList() {
    const [episodesInfo, setEpisodesInfo] = useState([]);


    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(res => {
                console.log(res.data.results);
                const episodeList = res.data.results;
                setEpisodesInfo(episodeList);
            })
            .catch(error => {
               console.log("Error:" ,error)
            });
    }, []);

    return (
        <section className="character-list grid-view">
            {episodesInfo.map(item => (
                <EpisodeCard info={item} key={item.id} />
            ))};
    </section>
    );
}
