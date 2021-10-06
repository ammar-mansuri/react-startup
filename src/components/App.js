import React from 'react';
import ReactDOM  from 'react-dom';
import SearchBar from './SearchBar';
import SearchBarStyles from '../css/SearchBarStyles.css'

class App extends React.Component{

    onSearchSubmit=(inputText)=>{
        console.log(inputText);
    }

    render=()=>{
    return(
        <div className="ui container searchHeader">
            <SearchBar onUserSubmit={this.onSearchSubmit}/>
        </div>
    );
    }
}

export default App;