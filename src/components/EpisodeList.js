import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";


export default function EpisodeList(props) {
    const [episodesInfo, setEpisodesInfo] = useState([]);
    //`https://rickandmortyapi.com/api/episode/

    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(res => {
                console.log(res.data.results);
                const episodeList = res.data.results;
                setEpisodesInfo(episodeList);
            })
            .catch(error => {
                props.history.push('/error');
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
