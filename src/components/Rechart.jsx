import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class Rechart extends React.Component {
  render() {
    const {
      data
    } = this.props;
    return (
      <div className="rechart">
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
          className="reChart"
        >
          <XAxis dataKey="date" />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area
              type='monotone'
              name={"Air Quality Index"}
              dataKey='airQualityIndex'
              stroke='#089c7c'
              fill='#18bc9c'
          />
          =
        </AreaChart>
      </div>
    );
  }
}

Rechart.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({}))
};

export default Rechart;
