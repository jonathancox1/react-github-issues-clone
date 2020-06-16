import React, { Component } from 'react'
import './issues.css';
import detailOpen from '../images/detailOpen.svg';
import moment from 'moment';
const ReactMarkdown = require('react-markdown');
moment().format();


export default class IssueDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            loading: true,
        }
    }

    componentDidMount() {
        const { issueNumber } = this.props.match.params;
        try {
            fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        detail: data,
                        loading: false,
                    })
                });
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        if (this.state.loading) {
            return <span> Loading Issue...</span>
        }

        const { title, number, user, created_at, comments, body } = this.state.detail;

        return (
            <div className="outerContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11">
                            <div className="title">
                                <h2>{title}<span style={{ color: '#ccc' }}> #{number}</span></h2>
                            </div>
                            <div className="row ml-2">
                                <button className="btn btn-sm my-auto mr-1" style={{ backgroundColor: '#28a745', color: 'white' }}>
                                    <img src={detailOpen} alt="Opened Issue"></img>
                                    &nbsp;Open
                                </button>
                                {user.login} opened this issue {moment(created_at).fromNow()} • {comments} comments
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-0.5 ml-3">
                                    <img src={user.avatar_url} alt="Users Avatar" width='50px' height='50px'></img>
                                </div>
                                <div className="col-8 detailContainer">
                                    <div className="row outerContainer">
                                        <div className="col-10">
                                            {user.login} commented {moment(created_at).fromNow()}
                                        </div>
                                        <div className="col-2">
                                            :) •••
                                        </div>
                                    </div>
                                    <ReactMarkdown>{body}</ReactMarkdown>
                                </div>
                                <div className="col-2">
                                    assignees
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




