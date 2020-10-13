import React from 'react';
import {render, screen, fireEvent, wait} from '@testing-library/react';
import App from "./App";
import {fetchShow as mockFetchShow} from "./api/fetchShow";
import {mockData} from "./mockData";
import userEvent from '@testing-library/user-event';

jest.mock('./api/fetchShow');

describe("App test", ()=>{
    test('Renders without error', ()=>{
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App/>);
    });

    test("Drop down menu is present", async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App/>);
        const dropdown = await screen.findByText(/select a season/i);
        expect(dropdown).toBeTruthy();
    })

    test("dropdown shows seasons", async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App/>);
        const dropdown = await screen.findByText(/select a season/i);
        userEvent.click(dropdown);
        const seasonOption = await screen.findByText(/season 1/i);
        expect(seasonOption).toBeTruthy();
    });

    test("episodes display for each season", async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App />)
        const dropdown = await screen.findByText(/select a season/i);
        userEvent.click(dropdown);
        const seasonOption = await screen.findByText(/season 1/i);
        userEvent.click(seasonOption);
        expect(
            await screen.findByText(/chapter one: the vanishing of will byers/i)
        ).toBeTruthy();
    });
});