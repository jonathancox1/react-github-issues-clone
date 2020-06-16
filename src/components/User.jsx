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
                    this.setState({ userList: [...this.state.userList, data] })
                    console.log(this.state);
                })
        } catch (err) {
            console.log(err);
        }
        this.setState({ userName: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.userName} placeholder="enter username"></input>
                    <button type="submit">Submit</button>
                </form>
                <UserCardList users={this.state.userList} />
            </div>
        )
    }
}
