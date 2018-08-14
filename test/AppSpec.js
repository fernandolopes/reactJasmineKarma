import CommentsComponent from "../src/components/comment";

// import Page from 'react-page-object'
import React from 'react'
// import App from 'App'

describe('AppSpec', function() {

    var TestUtils = React.addons.TestUtils;
    it('comments', function() {
        var comments = renderComponent(CommentsComponent);
        expect(comments).toContainElement("div.empty");
    });

    function renderComponent(component) {
        var commet_component = TestUtils.renderIntoDocument(component);
        return (commet_component.getDOMNode());
    }

    it('teste', function() {
        expect(true).toBe(true);
    });
});
