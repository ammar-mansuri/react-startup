import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component{
   
    state={searchedVideo:[],videoSelected: null };
   
    componentDidMount=()=>{
        this.getSearchedData('Clausthal-Zellerfeld');
    }

    getSearchedData = async (textData)=>{
        await youtube.get('/search',{
            params:{
                q:textData
            }
        }).then(response => {
            //console.log(response.data.items);
            this.setState({searchedVideo:response.data.items, videoSelected: response.data.items[0]});
        }).catch(e=>{
            this.setState({searchedVideo:e});
            console.log(e)
        })
    }

    onVideoSelect=(video)=>{
        this.setState({videoSelected:video})
    }
    

    render=()=>{
    return(
        <div className="ui container">
        <SearchBar submitSearch={this.getSearchedData} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.videoSelected}/>
                </div>
                
                <div className="five wide column">
                    <VideoList onVideoClicked={this.onVideoSelect} videos={this.state.searchedVideo}/>  
                </div>
            </div>
        </div>
        </div>
    );
    }

    
}

export default App;