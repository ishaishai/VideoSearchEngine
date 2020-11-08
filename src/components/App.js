import React from 'react';
import SearchBar from './SearchBar';
import ProgressBar from './searchComponents/ProgressBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = {videos: []};
    constructor(props) {
        super(props);
    }

    state = {progress: 0};

    changeProgress = (status) => {
        this.setState({progress: status});
    }

    handleVideos = (result) => {
        this.setState({videos: result.data.items});
    }

    render() {
        return (<div style={{height: "100%"}}>
                <ProgressBar status = {this.state.progress}/> 
                <SearchBar amount = {(this.state.videos) ? this.state.videos.length : null} handleResults = {this.handleVideos} onChange = {this.changeProgress} />      
                <VideoDetail />
                <VideoList videos = {this.state.videos}/>
                </div>);
    }

}

export default App;