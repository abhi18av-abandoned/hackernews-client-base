import React, {useEffect, useState} from 'react';
import axios from 'axios';

//=============================
// constants
//=============================

//=============================
// utils
//=============================

//=============================
// services
//=============================


const baseUrl = `https://hacker-news.firebaseio.com/v0`;
const newStoriesUrl = `${baseUrl}/newstories.json`;
const storyUrl = `${baseUrl}/item/`;

const getStory = async (storyId) => {
    return await axios.get(`${storyUrl + storyId}.json`);
};


const getStoryIds = async () => {
    return await axios.get(newStoriesUrl);
};


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
        getStory('21613364').then(data => console.log(data));
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
