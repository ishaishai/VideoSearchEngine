import React from 'react';
import './App.css'
import youtube from '../api/youtube';

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
    searchTerm = async (event) => {
        event.preventDefault(); 
        console.log(this.state.term);

        let result = await youtube.get('/search', {
            params: {
                q: this.state.term,
            }
        });

        this.props.handleResults(result);
    }
    render() { 
        return <div className = "search-bar ui segment">
            <div className="logoText"> VidRubb </div>
            <form className="ui form" onSubmit={this.searchTerm}>
                <div className="field searchField">
                    <input className="searchBox" type="text" placeholder="Video Search Here..."
                        onFocus={() => this.changeProgressStatus(1)}
                        onChange={(event) => this.setState({term: event.target.value})}
                        /> 
                    <input type="button" className = "ui button green" value="Search"/>
                    {this.props.amount && <div style={{color: "white",display: "inline",marginLeft: "10px"}}> found {this.props.amount} videos </div>}
                </div>
            </form>
        </div>
    }
}

export default SearchBar;