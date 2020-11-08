import React from 'react';
import { Divider } from 'semantic-ui-react'

const VideoItem = (props) => {
    return (
        <div className="videoItem">
            <Divider section />
            <div className = "title">{props.video.snippet.title} </div>
            <img src = {props.video.snippet.thumbnails.medium.url} />    
        </div>
    );
}

export default VideoItem;