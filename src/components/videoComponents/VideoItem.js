import React from 'react';
import { Divider } from 'semantic-ui-react'

const VideoItem = (props) => {
    return (
        <div className="videoItem" onClick = {() => props.onVideoSelect(props.video)}>
            <div className = "title">{props.video.snippet.title} </div>
            <img src = {props.video.snippet.thumbnails.medium.url} />   
            <Divider section /> 
        </div>
    );
}

export default VideoItem;