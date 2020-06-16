import React, { useState, useEffect } from 'react'
import Issue from './Issue'
import './issues.css';


function IssueList() {

    // setState using Hooks in a functional Component
    const [issues, setIssues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect similar to componentDiDMount
    useEffect(() => {
        try {
            fetch('https://api.github.com/repos/facebook/create-react-app/issues')
                .then((results) => results.json())
                .then(data => {
                    setIssues(data ? data : [])
                    setIsLoading(false)
                })
        }
        catch (error) {
            console.log(error);
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    };

    return (
        <div className="outerContainer mx-auto">
            <div className="text-center mt-5" style={{ height: 100 }}>
                <h2>issues list</h2>
            </div>
            {issues.map((item) => {
                return (
                    <Issue className="container" item={item} key={item.id}></Issue>
                )
            })}
        </div>
    )
}



export default IssueList;