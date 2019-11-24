import React, {useState, useEffect} from 'react';
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

const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        // getStory('21617937').then(data => console.log(data));
        // getStory('21617937').then(({data}) => setStory(data));
        getStory(storyId).then(({data}) => setStory(data));

    }, []);


    return (
        <>
            {JSON.stringify(story)}
        </>
    );
};


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
            <Story storyId={'21617937'}/>
            {JSON.stringify(storyIds)}
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
            <p>HackerNews!</p>
            <StoriesContainer/>
        </>
    );

};
