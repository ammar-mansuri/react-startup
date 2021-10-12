import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';

const App=()=>{

    const getSearchedData=(textData)=>{

        youtube.get('/search',{
            params:{
                q:textData
            }
        }).then(response => {
            console.log(response);
        }).catch(e=>{
            console.log(e)
        })
    }


    return(
        <div className="ui container">
        <SearchBar submitSearch={getSearchedData} />
        </div>
    );
}

export default App;