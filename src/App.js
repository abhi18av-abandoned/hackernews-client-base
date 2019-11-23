import React from 'react';
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
            <p>Hello, HackerNews!</p>
        </>
    );

};
