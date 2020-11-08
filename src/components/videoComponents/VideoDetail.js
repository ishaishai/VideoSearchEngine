import React from 'react';
import {Embed} from 'semantic-ui-react';

const VideoDetail = ({video}) =>{
    if(video) {
        console.log(video);
        const youtubeEmbedUrl = `http://www.youtube.com/embed/${video.id.videoId}`;
        const date = new Date();
        
        const videoPublishTime = date.toUTCString(`${video.snippet.publishTime}`).split(',')[1].split(':')[0].slice(0,-2);
         return (<div className = "videoDetail">
                        <Embed>
                        <iframe width="560" height="315" src={youtubeEmbedUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Embed>
                        <p>
                        {video.snippet.title}
                        </p>
                        <div>
                            {video.snippet.description}
                        </div>
                                                
                </div>);
    }
    return <div className="videoDetail"> </div>
}

export default VideoDetail;