import React from 'react';
import CommentsComponent from '../src/components/comment';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import expect from 'expect';

describe('AppSpec', function () {
    it('comments', function () {
        var comments = renderIntoDocument(<CommentsComponent />);

        expect(comments).toBeTruthy();

        var batata = scryRenderedDOMComponentsWithTag(comments, 'batata');

        console.log(batata);

        expect(batata).toBeTruthy('No!');
    });

    it('teste', function () {
        expect(true).toBe(true);
    });
});
