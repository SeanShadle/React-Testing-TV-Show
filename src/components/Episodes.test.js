import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'
import {fetchShow as mockFetchShow} from '../api/fetchShow'
import userEvent from '@testing-library/user-event'

jest.mock('../api/fetchShow')
  

describe("Episodes test", ()=>{
    test('Renders without error', ()=>{
        render(<Episodes episodes={[]}/>);
    });

    test('re-render episode list when data is added', () => {
        const testEpisodes = [
            {
                episode_id: 1,
                episode_name: "Chapter One: The Vanishing of Will Byers",
            },
            {
                episode_id: 2,
                episode_name: "Chapter two: The Weirdo on Maple Street",
            },
        ]
    })
})