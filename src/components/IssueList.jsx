import React, { Component } from 'react'
import Issue from './Issue'
import './issues.css';


export default class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then((results) => results.json())
            .then(results => {
                this.setState({ issues: results })
            })
    }

    render() {
        return (
            <div className="outerContainer mx-auto">
                <div className="text-center mt-5" style={{ height: 100 }}>
                    <h2>issues list</h2>
                </div>
                {this.state.issues.map((item, index) => {
                    return (
                        <Issue className="container" item={item} key={index}></Issue>
                    )
                })}
            </div>
        )
    }
}
