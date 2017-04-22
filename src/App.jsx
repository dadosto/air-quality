import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import ChartPage from './components/ChartPage';
import GoogleSearch from './components/GoogleSearch';


import * as Actions from './actions/actions';

const App = ({data, actions}) => {

  console.log('Data = ', data);

  return (
    <div className="App">
      <Header/>
      <ChartPage/>
      <GoogleSearch />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);