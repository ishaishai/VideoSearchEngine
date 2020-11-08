import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {

    const renderedList = (videos) ? videos.map((video) => {
        return <VideoItem video = {video}/>
    }) : null;

    return <div className="videoList"> {renderedList} </div>
}

export default VideoList;