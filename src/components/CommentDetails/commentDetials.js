import React from 'react';
import faker from 'faker';

// function getTime(){
//     return new Date().toLocaleTimeString();
// }

const CommentDetails = props => {

    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatarImage}></img>
        </a>

        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date"> {props.timeAgo} </span>
            </div>
            <div className="text"> {faker.lorem.sentence()} </div>
        </div>
    </div>
    );
}

export default CommentDetails;