import React, {useEffect, useState} from 'react';
import {getStory} from "../services/hnApi";
import {StoryWrapper} from "../styles/StoryStyles";

export const Story = ({storyId}) => {
    const [story, setStory] = useState([]);

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return (story && story.url)
        ? (
            <>
                <StoryWrapper>
                    <a href={story.url}>
                        <p>{story.title}</p>
                    </a>
                </StoryWrapper>
            </>
        )
        : null
};
