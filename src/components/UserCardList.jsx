import React from 'react';
import UserCard from './UserCard';
import './issues.css';


export default function UserCardList({ users }) {


    return (
        <div>
            UserCardList
            {users.map((item) => {
                return (
                    <UserCard item={item}></UserCard>
                )
            })}
        </div>
    )
}
