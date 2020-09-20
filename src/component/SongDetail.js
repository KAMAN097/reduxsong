import React from "react";
import { connect } from "react-redux";

const songDetail = ({ song }) => {
  if (!song) {
    return <h4>Select A Song</h4>;
  }
  return <h4>{song.title}</h4>;
};
const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(songDetail);
