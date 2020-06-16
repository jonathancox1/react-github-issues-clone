import React from 'react'

export default function UserCard({ item }) {
    return (
        <div>
            <div className="card mx-auto" style={{ width: '250px' }}>
                <div className="card-img-top">
                    <img src={item.avatar_url} alt="avatar" className="mx-auto"></img>
                </div>
                <div className="card-title mx-auto">{item.name}</div>
                <div className="card-body">
                    {item.bio}
                    {item.location}
                    <small>{item.blog}</small>
                    <small>{item.company}</small>
                </div>
            </div>
        </div>
    )
}
