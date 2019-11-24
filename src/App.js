import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios';

//=============================
// constants
//=============================

//=============================
// utils
//=============================


//=============================
// mappers
//=============================
const mapTime = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
        return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
        return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 1) {
        return `${interval} minutes`;
    }

    return `${Math.floor(seconds)} seconds`;
};


//=============================
// selectors
//=============================

const selectFields = ({id, by, url, time, title} = {}) => ({
    id,
    by,
    url,
    time,
    title
});


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
        getStory(storyId).then(({data}) => data && data.url && setStory(selectFields(data)));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
                <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                    {mapTime(story.time)}
        </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;

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
        <>
            <GlobalStyle/>
            <StoriesContainerWrapper data-test-id="stories-container">
                <Story key={storyId} storyId={storyId}/>
            </StoriesContainerWrapper>
        </>
    ));
};


//=============================
// hooks
//=============================

//=============================
// styles
//=============================


const GlobalStyle = createGlobalStyle`
            html {
            -webkit - box - sizing: border-box;
            box-sizing: border-box;
        }
            *, *:before, *:after {
            -webkit - box - sizing: inherit;
            box-sizing: inherit;
        }

            body {
            margin: 0;
            padding: 0;
            line-height: 1;
            color: #202020;
            background-color: #fafafe;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }

            ul {
            margin: 0;
            padding: 0;
        }
            `;

export const StoriesContainerWrapper = styled.main`
            max-width: 1140px;
            padding: 20px 15px;
            margin: auto;
            `;


export const StoryWrapper = styled.section`
            padding-top: 10px;
            margin-bottom: 20px;
            border-top: 1px solid #cccccc;

            &:first-of-type {
            border - top: 0;
        }

            &:last-of-type {
            margin - bottom: 0;
            padding-bottom: 0;
        }
            `;

const StoryTitle = styled.h1`
            margin-bottom: 5px;
            font-size: 18px;
            line-height: 1.8;
            margin: 0;
            text-decoration: none;

            a {
            color: #2e2e2c;
            background-color: #f8dc3d;
            text-decoration: none;
        }
            `;

const StoryMeta = styled.div`
            font-style: italic;

            > span:first-child {
            margin - right: 10px;
        }

            > span:not(:first-child):before {
            content: '•'
            margin: 0 7px;
        }

            .story__meta-bold {
            font - weight: bold;
        }
            `;

const StoryMetaElement = styled.span`
            font-weight: bold;
            color: ${props => props.color};
            `;


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
