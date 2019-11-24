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
        getStory(storyId).then(({data}) => data && data.url && setStory(data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return story && story.url
        ? (
            <>
                <a href={story.url}>
                    <p>
                        {story.title}
                    </p>
                </a>
                By: <p>{story.by}</p>
                Posted: <p>{story.time}</p>
                <hr/>
            </>
        )
        : null;


};


//=============================
// containers
//=============================

const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);


    useEffect(() => {
        getStoryIds().then(({data}) => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId}/>
    ));
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
