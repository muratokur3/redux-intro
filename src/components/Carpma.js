import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {carpma} from '../redux/actions/counterActions'

class Carpma extends Component {
  render() {
    return (
      <div>
        <button style={{color:'white', backgroundColor:'blue' }}
          onClick={(e) => {
            this.props.dispatch(carpma());
          }}
        >
          3 ile Carp
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(carpma,dispatch)}
}

export default connect(mapDispatchToProps)(Carpma)