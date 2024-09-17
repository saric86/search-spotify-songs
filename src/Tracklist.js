import React from "react";

import Track from "./Track";

const TrackList = (props) => {

  console.log('tracks:', props.tracks); 
  const tracks = props.tracks || [];  // default, in case an empty array, otherwise page crashes.
  
  return (
    <div>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
