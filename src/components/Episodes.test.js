import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'  

describe("Episodes test", ()=>{
    test('Renders without error', ()=>{
        render(<Episodes episodes={[]}/>);
    });

    test('rerender episode list when data is added', () => {
        const testEpisodes = [
            {
                episode_id: 1,
                episode_name: "Chapter One: The Vanishing of Will Byers",
            },
            {
                episode_id: 2,
                episode_name: "Chapter two: The Weirdo on Maple Street",
            },
        ];

        const { rerender } = render(<Episodes episodes={[]}/>);
        rerender(<Episodes episodes={testEpisodes} />);
        expect(screen.queryAllByTestId("episode")).toHaveLength(2);
    });
})