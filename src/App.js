import React, {useEffect, useState} from 'react';
import axios from 'axios';

//=============================
// constants
//=============================

const baseUrl = `https://hacker-news.firebaseio.com/v0`;
const newStoriesUrl = `${baseUrl}/newstories.json`;
// const storyUrl = `${baseUrl}/item/`;


const getStoryIds = async () => {
    return await axios.get(newStoriesUrl);
};

//=============================
// utils
//=============================

//=============================
// services
//=============================

//=============================
// components
//=============================

//=============================
// containers
//=============================

const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(({data}) => setStoryIds(data));
    }, []);


    return (
        <>
            <p>Hello, HackerNews!</p>
            <p>{JSON.stringify(storyIds)}</p>
        </>
    );

};


//=============================
// hooks
//=============================

//=============================
// styles
//=============================


//=============================
// selectors
//=============================

//=============================
// mappers
//=============================

//=============================
// App
//=============================


export const App = () => {

    return (
        <>
            <StoriesContainer/>
        </>
    );

};
