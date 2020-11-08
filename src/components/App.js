import React from 'react';
import SearchBar from './searchComponents/SearchBar';
import ProgressBar from './searchComponents/ProgressBar';
import VideoDetail from './videoComponents/VideoDetail';
import VideoList from './videoComponents/VideoList';

class App extends React.Component {
    state = {videos: [], selectedVideo: null,progress: 0};
    constructor(props) {
        super(props);
    }

    changeProgress = (status) => {
        this.setState({progress: status});
    }

    handleVideos = (result) => {
        this.setState({videos: result.data.items,selectedVideo: result.data.items[0]});
    }

    handleVideoSelect = (item) => {
        console.log("selected video",item);
        this.setState({selectedVideo: item,progress: 2});
    }

    render() {
        return (<div style={{height: "100%"}}>
                <ProgressBar status = {this.state.progress}/> 
                <SearchBar amount = {(this.state.videos) ? this.state.videos.length : null} handleResults = {this.handleVideos} onChange = {this.changeProgress} />      
                <VideoDetail video = {this.state.selectedVideo} onChange = {this.changeProgress}  />
                <VideoList onVideoSelect = {this.handleVideoSelect} videos = {this.state.videos}/>
                </div>);
    }

}

export default App;