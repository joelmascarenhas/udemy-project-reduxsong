import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    //console.log({props});
    if(!song){
        return <div>Select a song to play</div>;
    }
    return(
        <div>
            <h3>Details For:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>    
        );
};

const mapStateToProps = state => {
    return { song: state.selectedSong //The key song is customizable
    };
};

export default connect(mapStateToProps)(SongDetail);