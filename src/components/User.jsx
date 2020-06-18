import React, { Component } from 'react';
import UserCardList from './UserCardList';
import './issues.css';


export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userList: [],
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({ userName: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // call api
        try {
            fetch(`https://api.github.com/users/${this.state.userName}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ userList: [...this.state.userList, data], userName: '' })
                    console.log(this.state);
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col outerContainer">
                    <div className="container">
                        <div className="row my-auto form-group">
                            <form onSubmit={this.handleSubmit} className="mx-auto">
                                <label for="username"></label>
                                <input name="username" className="form-control" onChange={this.handleChange} value={this.state.userName} placeholder="enter username"></input>
                                <button className="btn btn-sm btn-outline-secondary form-control" type="submit">Submit</button>
                            </form>
                        </div>
                        {this.state.userList.length > 0 &&
                            <div className="row mx-auto border">
                                <UserCardList users={this.state.userList} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
