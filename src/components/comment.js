import React, { Component } from 'react';

export default class CommentsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="col">{this.props.texto}</div>
        );
    }
};
