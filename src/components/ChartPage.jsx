import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAirQualityDataForDateRangeAndLocation } from '../actions/actions';

class ChartPage extends React.Component {
  componentDidMount() {
    const {
      fetchData
    } = this.props;

    // fetchData('2015-10-25', '2015-10-25', '40.7324296', '-73.9977264');
  }

  render() {
    const {
      data
    } = this.props;
    return (
      <div>
        {data}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchData: getAirQualityDataForDateRangeAndLocation
  };
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
