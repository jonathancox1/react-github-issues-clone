import React, { useEffect, useState } from 'react'
import moment from 'moment';
moment().format();

export default function UserDetail(props) {
    const [item, setItem] = useState([]);
    const [repos, setRepos] = useState([]);

    const userName = props.match.params.user

    useEffect(() => {
        try {
            fetch(`https://api.github.com/users/${userName}`)
                .then((results) => results.json())
                .then(data => {
                    setItem(data ? data : [])
                })
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        try {
            fetch(`https://api.github.com/users/${userName}/repos`)
                .then((results) => results.json())
                .then(data => {
                    setRepos(data ? data : [])
                })
        } catch (err) {
            console.log(err)
        }
    }, []);

    return (
        <div>
            <div className="row m-5">
                <div className="col-4">
                    <div className="card mx-auto" style={{ maxWidth: '250px' }}>
                        <div className="card-img-top mx-auto">
                            <img src={item.avatar_url} alt="avatar" className="mx-auto" style={{ width: '100%' }}></img>
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
                </div>
                <div className="col-8">
                    <div className="row mb-5 d-flex justify-content-around">
                        <ul className="nav nav-fill">
                            <li className="nav-item nav-link"><a href="#">Overview</a></li>
                            <li className="nav-item nav-link"><a href={item.repos_url}>Repositories<span className="ml-1 badge badge-pill badge-secondary">{item.public_repos}</span></a></li>
                            <li className="nav-item nav-link"><a href="#">Projects</a>{item.public_projects ? <span className="ml-1 badge badge-pill badge-secondary">{item.public_projects}</span> : null}</li>
                            <li className="nav-item nav-link"><a href="#">Packages</a>{item.public_packages ? <span className="ml-1 badge badge-pill badge-secondary">{item.public_packages}</span> : null}</li>
                            <li className="nav-item nav-link"><a href={item.starred_url}>Stars</a>{item.public_stars ? <span className="ml-1 badge badge-pill badge-secondary">{item.public_stars}</span> : null}</li>
                            <li className="nav-item nav-link"><a href={item.followers_url}>Followers<span className="ml-1 badge badge-pill badge-secondary">{item.followers}</span></a></li>
                            <li className="nav-item nav-link"><a href={item.following_url}>Following<span className="ml-1 badge badge-pill badge-secondary">{item.following}</span></a></li>
                        </ul>
                    </div>
                    <hr />
                    {repos.map((repo) => {
                        return (
                            <>
                                <h4><a href={repo.html_url}>{repo.name}</a></h4>
                                <small>{repo.description ? <>{repo.description}<br /></> : null}</small>
                                {repo.language} Updated {moment(repo.created_at).fromNow()}
                                <hr />
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
