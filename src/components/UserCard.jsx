import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UserDetail from './UserDetail';


export default function UserCard({ item }) {
    return (
        <div className="m-1">
            <div className="card mx-auto" style={{ width: '250px' }}>
                <div className="card-img-top mx-auto">
                    <Link to={`/user/userDetail/${item.login}`}>
                        <img src={item.avatar_url} alt="avatar" className="mx-auto" style={{ width: '100%' }}></img>
                    </Link>
                </div>
                <div className="card-body mx-auto">
                    <div className="card-title mx-auto"><a href={item.html_url}>{item.name ? item.name : item.login}</a></div>
                    {item.bio}
                    <br />
                    {item.company && item.location &&
                        <small>
                            <i class="far fa-building"></i> {item.company}
                            <br />
                            <i class="far fa-compass"></i> {item.location}
                            <br />
                        </small>
                    }
                    {item.blog ? <small><i class="fas fa-link"></i><a href={item.blog}> {item.blog}</a></small> : null}
                </div>
            </div>
        </div >
    )
}
