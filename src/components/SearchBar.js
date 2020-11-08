import React from 'react';
import './App.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {term: ""}

    //uses the function call from parent to edit current search status
    changeProgressStatus = (status) => {
        this.props.onChange(status);
    } 

    //edit the current search Term, (if not necessery you should consider searching immediatly)
    searchTerm = (event) => {
        event.preventDefault(); 
        console.log(this.state.term);
        this.setState({term: event.target.value});
    }
    render() { 
        return <div className = "search-bar ui segment">
            <form className="ui form" onSubmit={(event) => this.searchTerm(event)}>
                <div className="field searchField">
                    <input className="searchBox" type="text" placeholder="Video Search Here..."
                        onFocus={() => this.changeProgressStatus(1)}
                        onChange={(event) => this.setState({term: event.target.value})}
                        />
                    <input type="button" className = "ui button green" value="Search"/>
                </div>
            </form>
        </div>
    }
}

export default SearchBar;