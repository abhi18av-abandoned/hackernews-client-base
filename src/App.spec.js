import React from 'react';
import axios from 'axios';
import {act} from 'react-dom/test-utils'
import {render, cleanup, waitForElement} from '@testing-library/react';
import {App} from './App';
import {useInfiniteScroll} from './App';
import {getStory, getStoryIds} from './App';
import {STORY_INCREMENT} from './App';
import {newStoriesUrl, storyUrl} from './App';
import {Story, StoriesContainer} from './App';


//=============================
// fixtures
//=============================

const singularStory = {
    by: 'Karl Hadwen',
    id: 1,
    time: 1567209822,
    title: 'Tarnished: Google Responds',
    url: 'https://something.com/hackernewstut',
};

const storyIds = [1];

const emptySingularStory = {
    by: undefined,
    id: undefined,
    time: undefined,
    title: undefined,
    url: undefined,
};

// //=============================
// // HN API
// // DONE
// //=============================
//
// jest.mock('axios');
//
// describe('HackerNews Api', () => {
//     beforeEach(() => {
//         jest.resetAllMocks();
//     });
//
//     describe('getStory functionality', () => {
//         it('requests and gets a story from the HackerNews Api', async () => {
//             axios.get.mockImplementation(() =>
//                 Promise.resolve({data: singularStory})
//             );
//
//             const entity = await getStory(1);
//             expect(axios.get).toHaveBeenCalledTimes(1);
//             expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
//             expect(entity).toEqual(singularStory);
//         });
//
//         it('does not retrieve a story from the Api, but handles gracefully', async () => {
//             axios.get.mockImplementation(() =>
//                 Promise.resolve({data: emptySingularStory})
//             );
//
//             const entity = await getStory(1);
//             expect(axios.get).toHaveBeenCalledTimes(1);
//             expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
//             expect(entity).toEqual(emptySingularStory);
//         });
//     });
//
//     describe('getStoryIds functionality', () => {
//         it('requests and gets story ids from the HackerNews Api', async () => {
//             axios.get.mockImplementation(() => Promise.resolve({data: storyIds}));
//
//             const entity = await getStoryIds();
//             expect(axios.get).toHaveBeenCalledTimes(1);
//             expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
//             expect(entity).toEqual(storyIds);
//         });
//     });
// });


// //=============================
// // APP
// //=============================
//
// // cleans up DOM before each test
//
//
// beforeEach(cleanup);
//
//
// jest.mock('./App.js', useInfiniteScroll);
//
//
// jest.mock('./App', () => ({
//     getStory: jest.fn(),
//     getStoryIds: jest.fn(),
// }));
//
// test('renders the application', async () => {
//     useInfiniteScroll.mockImplementation(() => ({
//         count: STORY_INCREMENT,
//     }));
//     getStory.mockImplementation(() => Promise.resolve(singularStory));
//     getStoryIds.mockImplementation(() => Promise.resolve(storyIds));
//
//     const {getByText, queryByTestId} = render(<App/>);
//     await waitForElement(() => [
//         expect(getByText('Hacker News Stories')).toBeTruthy(),
//         expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
//         expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
//     ]);
// });

// //=============================
// // StoriesContainer
// // TODO
// //=============================
// beforeEach(cleanup);
//
//
// jest.mock('./App', () => ({
//     getStory: jest.fn(),
//     getStoryIds: jest.fn(),
// }));
//
// test('renders the story container with a story', async () => {
//     useInfiniteScroll.mockImplementation(() => ({
//         count: STORY_INCREMENT,
//     }));
//     getStory.mockImplementation(() => Promise.resolve(singularStory));
//     getStoryIds.mockImplementation(() => Promise.resolve(storyIds));
//
//     const {getByText, queryByTestId} = render(<StoriesContainer/>);
//     await waitForElement(() => [
//         expect(getByText('Hacker News Stories')).toBeTruthy(),
//         expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
//         expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
//     ]);
// });

// //=============================
// // Story
// // TODO
// //=============================
//
// beforeEach(() => {
//     cleanup();
//     jest.resetAllMocks();
// });
//
// jest.mock('./App', () => ({
//     getStory: jest.fn(),
// }));
//
// test('renders the story component with content', async () => {
//     getStory.mockImplementation(() => Promise.resolve(singularStory));
//
//     const {getByText, getByTestId} = render(<Story storyId="1"/>);
//
//     await waitForElement(() => [
//         expect(getByTestId('story')).toBeTruthy(),
//         expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
//         expect(getByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
//     ]);
// });
//
//

