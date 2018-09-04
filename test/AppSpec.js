import React from 'react';
import CommentsComponent from '../src/components/comment';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, findRenderedDOMComponentWithTag, isDOMComponent } from 'react-dom/test-utils';
import expect from 'expect';
import * as expectElement from 'expect-element'
expect.extend(expectElement)
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('AppSpec', function () {
    var comments;

    beforeEach(function () {
        comments = renderIntoDocument(<CommentsComponent texto={'teste'}/>);
    });

    it('is component', () => {
        isDOMComponent(comments);
    })

    it('comments', function () {

        expect(comments).toBeTruthy();
        var div = scryRenderedDOMComponentsWithTag(comments, 'div');
        expect(div).toBeTruthy()
    });

    it('teste', function () {
        expect(true).toBe(true);
    });

    it('ABC', () => {
        
        const wrapper = shallow(<CommentsComponent texto={'teste'}/>);
console.log(wrapper)
        expect(wrapper.contains("teste")).toEqual(true);

        // var div = findRenderedDOMComponentWithTag(comments, 'div');
        // console.log(expectElement)
        // expect(comments).toBeTruthy();
        // expect(comments).toHaveAttribute('id', 'col', 'teste');
    })

});
