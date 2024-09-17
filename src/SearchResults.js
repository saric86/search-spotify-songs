import React from "react";

import TrackList from './Tracklist';

function SearchResults(props) {
    return (
        <div>
            <h3>Results</h3>
            <TrackList tracks={props.result} />
        </div>
    )
};

export default SearchResults;