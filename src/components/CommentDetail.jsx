import React, { Component } from 'react'
import moment from 'moment';
const ReactMarkdown = require('react-markdown');
moment().format();


export default class CommentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const issueNumber = this.props.num
        try {
            fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}/comments`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        comments: data
                    })
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <>
                {this.state.comments.map((item) => {
                    return (

                        <div className="row mt-5">
                            <div className="col-0.5 ml-3">
                                <img src={item.user.avatar_url} alt="avatar" style={{ width: '30px', height: '30px' }}></img>
                            </div>
                            <div className="col-8 detailContainer">
                                <div className="outerContainer">
                                    <b>{item.user.login}</b> commented {moment(item.created_at).fromNow()}
                                </div>
                                <div className="row">
                                    <div className="col-10">
                                        <ReactMarkdown>{item.body}</ReactMarkdown>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </>
        )
    }
}
