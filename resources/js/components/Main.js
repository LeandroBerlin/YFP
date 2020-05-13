
import ReactDOM from 'react-dom';
import React, { useState } from "react";

function Track({ track, index, removeTrack }) {
    return (
        <div
            className="track"
        >
            {track.text}

            <div>
                <i className="far fa-play-circle"></i>
                <i className="far fa-edit"></i>
                <button className="btn btn-danger  btn-xs" onClick={() => removeTrack(index)}>x</button>
            </div>
        </div>
    );
}

function TrackFrom({ addTrack }) {
    const [value, setValue] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTrack(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input search mt-2"
                value={value ? value : ''}
                placeholder="Search Track"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

const Main = () => {

    console.log("Yo")

    const [tracks, setTrack] = useState([
        {
            text: "Cure - The Funeral Party"
        },
        {
            text: "Joy Division - Decades"
        },
        {
            text: "Nick Cave and the Bad Seeds - Into my arms"
        }
    ]);

    const addTrack = text => {
        const newTracks = [...tracks, { text }];
        setTrack(newTracks);
    };


    const removeTrack = index => {
        const newTracks = [...tracks];
        newTracks.splice(index, 1);
        setTrack(newTracks);
    };


    return (

        <div className="col-md-12 mt-5">
            <div className="card ">
                <div className="card-header text-white bg-dark">Your Playlist</div>

                <div className="card-body playlist-body">

                    <div className="app">
                        <div className="track-list">
                            {tracks.map((track, index) => (
                                <Track
                                    key={index}
                                    index={index}
                                    track={track}
                                    removeTrack={removeTrack}
                                />
                            ))}
                            <TrackFrom addTrack={addTrack} />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Main



if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
