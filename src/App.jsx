import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import ChartPage from './components/ChartPage';
import AirQualityMeter from './components/AirQualityMeter';

import * as Actions from './actions/actions';

const App = ({data, location}) => {

  console.log('Data = ', data);
  console.log('Location = ', location);

  return (
    <div className="App">
      <Header/>
      <ChartPage/>
      <AirQualityMeter />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object
};

const mapStateToProps = state => {
  return { data: state.airQuality.data, location: state.airQuality.location };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);