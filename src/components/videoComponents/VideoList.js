import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect}) => {

    if(!videos) {
        return <div className="videoList">Waiting for your input...</div>
    } 
    const renderedList = (videos) ? videos.map((video,i) => {
        return <VideoItem key={i} onVideoSelect = {onVideoSelect} video = {video}/>
    }) : null;

    return <div className="videoList"> <div style={{marginTop: "10px"}}>Search results: </div>  {renderedList} </div>
}

export default VideoList;