import React, {useEffect, useState} from 'react';
import axios from 'axios';

//=============================
// constants
//=============================

const baseUrl = `https://hacker-news.firebaseio.com/v0`;
const newStoriesUrl = `${baseUrl}/newstories.json`;
const storyUrl = `${baseUrl}/item/`;


const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then((data) => data);
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

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        setStoryIds('I am a story ID');
    }, []);


    return (
        <>
            <p>Hello, HackerNews!</p>
            <p>{storyIds}</p>
        </>
    );

};
