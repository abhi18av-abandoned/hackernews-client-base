import React, {useEffect, useState} from 'react';
import {getStoryIds} from "./services/hnApi";

export const App = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        // setStoryIds('Hello from useEffect!');

        getStoryIds().then(({data}) => data && setStoryIds(data));
    }, []);


    return (
        <p>{JSON.stringify(storyIds)}</p>
    );

};
