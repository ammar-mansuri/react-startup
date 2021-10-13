import '../css/VideoItem.css';

const VideoItem=( {video,onVideoClicked} )=>{




    return(
        <div onClick={() => onVideoClicked(video)} className="video-item item" >
        <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
        <div className="content">   
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
        </div>
    );
}

export default VideoItem;