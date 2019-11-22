import axios from 'axios';


export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;

export const newStoriesUrl = `${baseUrl}newstories.json`;

export const storyurl = `${baseUrl}item/`;

// blocks the rendering of UI and so we use the async and shove it to the microtask queue
export const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then((data) => data);
};
