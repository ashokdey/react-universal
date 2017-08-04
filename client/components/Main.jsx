import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../actions/cartActions';



class Main extends Component {
  render() {
    return(
      <div>
        <Navigation cartItems={this.props.totalQuantity} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    totalQuantity: state.cart.totalQuantity
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCart
  }, dispatch);
}

export default connect(mapStateToProps)(Main);