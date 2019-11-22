import React, {useEffect, useState} from 'react';
import {getStory, getStoryIds} from "../services/hnApi";

export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(({data}) => data && setStoryIds(data));
        getStory(21607226).then(data => console.log(data));

    }, []);


    return (
        <p>{JSON.stringify(storyIds)}</p>
    );

};
