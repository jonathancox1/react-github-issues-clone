import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './issues.css';
import iconOpen from '../images/checkOpen.svg'
import iconClosed from '../images/checkClosed.svg'
import comment from '../images/comment.svg'
import moment from 'moment';
moment().format();

export default function Issue({ item }) {

    return (
        <div className="container">
            <div className="row">
                <div className="imgCol">
                    {item.state === 'open' ? <img src={iconOpen} alt="Open Issue"></img> : <img src={iconClosed} alt="Closed Issue"></img>}
                </div>
                <div className="col-md-11">
                    <div className="title">
                        <a href={`issue/${item.number}`}>{item.title}</a>
                        {/* add colored issue labels */}
                        {item.labels.map((item) => {
                            return (
                                <button disabled className="mx-1" style={{ borderRadius: 3, color: 'white', backgroundColor: `#${item.color}`, fontSize: 12, fontWeight: 'bold', height: 25, paddingTop: 0 }}>
                                    {item.name}
                                </button>
                            )
                        })}
                        <br />
                        <small>#{item.id} opened {moment(item.created_at).fromNow()} by&nbsp;
                            <Link to={`/user/userDetail/${item.user.login}`}>{item.user.login}</Link>
                        </small>
                    </div>
                </div>
                <div className="commentCol">
                    <div className="">
                        {item.comments > 0 ? <><img src={comment} alt="Icon Indicating Comments"></img>&nbsp;<small>{item.comments}</small></> : null}
                    </div>
                </div>
            </div>
        </div >
    )
}

