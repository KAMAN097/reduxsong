import React from "react";
import { selectSong } from "../action";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songsList.map((song) => {
      return (
        <div key={song.title} onClick={() => this.props.selectSong(song)}>
          <h1>{song.title}</h1>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    songsList: state.songsList,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
