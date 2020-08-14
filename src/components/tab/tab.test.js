import { render } from '@testing-library/react';
import React from 'react';
import { Tabs, Tab } from './tab';

describe('tabs component tests', () => {
    test('rendering of tabs header in DOM', () => {
        const { queryByText } = render(<Tabs>
            <Tab name='Tab 1'>
                Tab 1 content
            </Tab>
            <Tab name='Tab 2'>
                Tab 2 content
            </Tab>
            <Tab name='Tab 3'>
                Tab 3 content
            </Tab>
        </Tabs>);

        expect(queryByText('Tab 1').textContent).toBe('Tab 1');
        expect(queryByText('Tab 2').textContent).toBe('Tab 2');
        expect(queryByText('Tab 3').textContent).toBe('Tab 3');
        expect(queryByText('Tab 1 content')).toBeTruthy();
        expect(queryByText('Tab 2 content')).toBeFalsy();
        expect(queryByText('Tab 3 content')).toBeFalsy();
    });

    test('active tab content', () => {
        const { queryByText } = render(<Tabs>
            <Tab name='Tab 1'>
                Tab 1 content
            </Tab>
            <Tab selected name='Tab 2'>
                Tab 2 content
            </Tab>
            <Tab name='Tab 3'>
                Tab 3 content
            </Tab>
        </Tabs>);

        expect(queryByText('Tab 1 content')).toBeFalsy();
        expect(queryByText('Tab 2 content')).toBeTruthy();
        expect(queryByText('Tab 3 content')).toBeFalsy();
    });

    test('content change on clicking tab', () => {
        const { queryByText } = render(<Tabs>
            <Tab name='Tab 1'>
                Tab 1 content
            </Tab>
            <Tab selected name='Tab 2'>
                Tab 2 content
            </Tab>
            <Tab name='Tab 3'>
                Tab 3 content
            </Tab>
        </Tabs>);

        expect(queryByText('Tab 1 content')).toBeFalsy();
        expect(queryByText('Tab 2 content')).toBeTruthy();
        expect(queryByText('Tab 3 content')).toBeFalsy();

        queryByText('Tab 1').click();

        expect(queryByText('Tab 1 content')).toBeTruthy();
        expect(queryByText('Tab 2 content')).toBeFalsy();
        expect(queryByText('Tab 3 content')).toBeFalsy();

        queryByText('Tab 3').click();

        expect(queryByText('Tab 1 content')).toBeFalsy();
        expect(queryByText('Tab 2 content')).toBeFalsy();
        expect(queryByText('Tab 3 content')).toBeTruthy();
    });
});

describe('tab component tests', () => {
    const { queryByText } = render(<Tab name="Normal Tab"> Normal tab content </Tab>);

    expect(queryByText('Normal Tab')).toBeTruthy();
    expect(queryByText('Normal tab content')).toBeTruthy();
});