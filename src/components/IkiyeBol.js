import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ikiyeBol } from "../redux/actions/counterActions";

class IkiyeBol extends Component {
  render() {
    return (
      <div>
        <button style={{color:'white', backgroundColor:'purple' }}
          onClick={(e) => {
            this.props.dispatch(ikiyeBol());
          }}
        >
          ikiye böl
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(ikiyeBol, dispatch) };
}

export default connect(mapDispatchToProps)(IkiyeBol);
