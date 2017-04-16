import React from 'react';
import { connect } from 'react-redux';
import { getAirQualityData } from '../service/AirQualityService';

class ChartPage extends React.class {
  // TODO: Implement
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: getAirQualityData
  };
};

export default connect(ChartPage);