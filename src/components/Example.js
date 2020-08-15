import React, { Component } from 'react';

import exampleApi from '../api/ExampleApi';

export default class Example extends Component {
    async componentDidMount() {
        let data = await exampleApi.getAll();
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}