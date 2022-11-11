import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modAl } from "../redux/actions/counterActions";

class ModAl extends Component {
  render() {
    return (
      <div>
        <button
          style={{ color: "white", backgroundColor: "pink" }}
          onClick={(e) => {
            this.props.dispatch(modAl());
          }}
        >
          mo al
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(modAl, dispatch) };
}

export default connect(mapDispatchToProps)(ModAl);
