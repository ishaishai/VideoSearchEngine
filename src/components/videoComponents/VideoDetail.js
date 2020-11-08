import React from 'react';

const VideoDetail = ({video}) =>{
    if(video)
         return (<div className = "videoDetail">{video.snippet.title}</div>);
    return <div className="videoDetail"> </div>
}

export default VideoDetail;