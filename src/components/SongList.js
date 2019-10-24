import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) => {
            return ( //Returns JSX for each list
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>        
            );
        });
    }

    render(){
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    //return state;
    return {songs: state.songs} //Basically getting all songs into songs variable and we can use it as props in the render()
};

//can also be a function i.e function mapStateToProps = () = {}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);