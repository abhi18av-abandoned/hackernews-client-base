import React, {useEffect, useState} from 'react';

export const App = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        setStoryIds('Hello from useEffect!');
    }, []);


    return (
        <p>{storyIds}</p>
    );

};
