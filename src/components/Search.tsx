import * as React from "react";

import ".././styles/styles.scss";

class Search extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cssSearch">
                <input
                  type="text"
                  placeholder="Search..." />
                <button>Search</button>
            </div>
        );
    }
}

export default Search;
