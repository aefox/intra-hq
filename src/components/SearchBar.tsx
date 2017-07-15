import * as React from "react";

// TODO: Fix query reset

interface ISearchBarState {
    query: string;
}

class SearchBar extends React.Component<{}, ISearchBarState> {
    state = {
        query: null,
    };

    checkForEnter(event) {
        const enterKeyCode = 13;
        if ( event.keyCode !== enterKeyCode ) {
            return;
        }

        this.querySubmit();
    }

    queryUpdate(event) {
        this.setState( { query: event.target.value } );
    }

    querySubmit() {
        if ( this.state.query == null ) {
            return;
        }

        alert("Submitting query: ".concat(this.state.query));

        this.setState( {query: null } );
    }

    render() {
        return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..."
                   value={this.state.query}
                   onChange={this.queryUpdate.bind(this)}
                   onKeyDown={this.checkForEnter.bind(this)} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.querySubmit.bind(this)} >
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
    ); }
}

export default SearchBar;