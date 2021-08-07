import React from 'react'


const MessageComponent = (props) =>{
    return(
        <div className="ui message">
                <div className="header">{props.header}</div>
                <p>{props.text}</p>
        </div>
    )


}

export default MessageComponent;