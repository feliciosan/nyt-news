import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopStoriesListItem from './top-stories-list-item';

describe('Shoud render TopStoriesListItem component correctly', () => {
    it('Renders structure correctly', () => {
        const { queryByTestId } = render(
            <TopStoriesListItem post={{}} handleClick={jest.fn()} />
        );

        expect(queryByTestId('top-stories-item-byline')).toBeTruthy();
        expect(queryByTestId('top-stories-item-title')).toBeTruthy();
        expect(queryByTestId('top-stories-item-abstract')).toBeTruthy();
        expect(queryByTestId('top-stories-item-button')).toBeTruthy();
    });

    it('Renders post data correctly', () => {
        const { queryByTestId } = render(
            <TopStoriesListItem
                post={{
                    byline: 'My author',
                    title: 'My title',
                    abstract: 'My abstract',
                }}
                handleClick={jest.fn()}
            />
        );

        expect(queryByTestId('top-stories-item-byline').innerHTML).toEqual(
            'My author'
        );
        expect(queryByTestId('top-stories-item-title').innerHTML).toEqual(
            'My title'
        );
        expect(queryByTestId('top-stories-item-abstract').innerHTML).toEqual(
            'My abstract'
        );
        expect(queryByTestId('top-stories-item-button').innerHTML).toEqual(
            'Open news'
        );
    });

    it('Fires handleClick function correctly', () => {
        const handleClick = jest.fn();
        const { queryByTestId } = render(
            <TopStoriesListItem post={{}} handleClick={handleClick} />
        );

        fireEvent.click(queryByTestId('top-stories-item-button'));
        expect(handleClick).toHaveBeenCalled();
    });
});
