import React from 'react';
import SearchBar from './SearchBar';
import ProgressBar from './searchComponents/ProgressBar';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {progress: 0};

    changeProgress = (status) => {
        this.setState({progress: status});
    }

    render() {
        return (<div>
                <ProgressBar status = {this.state.progress}/> 
                <SearchBar onChange = {this.changeProgress} />      
                </div>);
    }

}

export default App;