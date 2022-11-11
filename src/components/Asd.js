import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {asd} from '../redux/actions/counterActions'

class Asd extends Component {
  render() {
    return (
      <div>
        <button style={{color:'white', backgroundColor:'red' }}
          onClick={(e) => {
            this.props.dispatch(asd());
          }}
        >
          5 ekle
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(asd,dispatch)}
}

export default connect(mapDispatchToProps)(Asd)