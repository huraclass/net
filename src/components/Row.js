import React, {useEffect} from 'react';
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "../api/requests";
import axios from "../api/axios";
import instance from "../api/axios";

const Row = ({isLargeRow,title,fetchUrl,id}) => {
    // useEffect(async () => {
    //     async function fetchMovieData() {
    //         const request = await instance.get(fetchUrl);
    //         console.log(request);
    //     }
    //
    //     await fetchMovieData();
    // },[]);
    // return (
    //     <div></div>
    // );
};

export default Row;