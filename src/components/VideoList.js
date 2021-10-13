import VideoItem from "./VideoItem";

const VideoList=({videos, onVideoClicked})=>{

    const renderedVideos=videos.map( video => {
        return <VideoItem onVideoClicked={onVideoClicked} key={video.id.videoId} video={video} />;
    })

    return(
        <div className="ui relaxed divided list">{renderedVideos}</div>
    );
}

export default VideoList;