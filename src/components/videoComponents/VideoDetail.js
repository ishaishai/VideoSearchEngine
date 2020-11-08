import React from 'react';
import {Embed} from 'semantic-ui-react';

const VideoDetail = ({video,onChange}) =>{
    if(video) {
        console.log(video);
        const youtubeEmbedUrl = `http://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
        const date = new Date();
        
        const videoPublishTime = date.toUTCString(`${video.snippet.publishTime}`).split(',')[1].split(':')[0].slice(0,-2);
        
        onChange(3);
         return (<div className = "videoDetail">
                        <Embed>
                        <iframe width="560" height="315" src={youtubeEmbedUrl} frameborder="0" allowfullscreen></iframe>
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