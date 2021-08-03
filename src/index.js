import React from 'react'
import ReactDOM  from 'react-dom'


function getTime(){
    return new Date().toLocaleTimeString();
}
const App = () => {

    return (
    
    <div className="ui container comments"> 
    
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar"></img>
        </a>

        <div className="content">
            <a href="/" className="author">
                Ammar
            </a>
            <div className="metadata">
                <span className="date"> Today at: {getTime()} </span>
            </div>
            <div className="text"> Hey! Welcome to the Blog </div>
        </div>

    </div>
    </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));