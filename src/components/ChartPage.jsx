/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAirQualityDataForDateRangeAndLocation } from '../actions/actions';
import Rechart from './Rechart';
import { mapAirQualityData } from '../util/ChartDataMapper';

class ChartPage extends React.Component {

  render() {
    const {
      historyData
    } = this.props;

    console.log(historyData);

    const chartData = mapAirQualityData(historyData);

    console.log(chartData);

    return (
      <div className="history-chart-container">
        <Rechart data={chartData}/>
      </div>
    );
  }
}

ChartPage.propTypes = {
  historyData: React.PropTypes.arrayOf(React.PropTypes.shape({})),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
    address: React.PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    historyData: state.airQuality.historyData,
    location: state.airQuality.location
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchData: getAirQualityDataForDateRangeAndLocation
  };
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
