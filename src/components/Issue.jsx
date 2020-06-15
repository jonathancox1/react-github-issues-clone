import React from 'react'
import './issues.css';
import iconOpen from '../images/checkOpen.svg'
import iconClosed from '../images/checkClosed.svg'
import comment from '../images/comment.svg'
import moment from 'moment';


export default function Issue({ item }) {
    moment().format();
    return (
        <div className="container">
            <div className="row">
                <div className="imgCol">
                    {item.state === 'open' ? <img src={iconOpen}></img> : <img src={iconClosed}></img>}
                </div>
                <div className="col-md-11">
                    <div className="title">
                        {item.title}

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
                            <a href={item.user.url}>{item.user.login}</a>
                        </small>

                    </div>
                </div>
                <div className="commentCol">
                    <div className="">
                        {item.comments > 0 ? <><img src={comment}></img>&nbsp;<small>{item.comments}</small></> : null}
                    </div>
                </div>
            </div>
        </div >
    )
}

