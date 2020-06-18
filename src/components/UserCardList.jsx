import React from 'react';
import UserCard from './UserCard';
import './issues.css';


export default function UserCardList({ users }) {


    return (
        <>
            <div className="row mx-auto mt-5">
                {users.map((item, index) => {
                    return (
                        <UserCard key={index} item={item}></UserCard>
                    )
                })}
            </div>
        </>
    )
}
