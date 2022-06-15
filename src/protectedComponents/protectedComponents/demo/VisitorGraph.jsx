import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { visitorStats } from '../../assets/dummy/visitorStats';

const VisitorGraph = () => {
  const [data, setData] = useState([...visitorStats]);


  const config = {
    data,
    xField: 'date',
    yField: 'number',
    // xAxis: {
    //   range: [0, 1],
    // },
  };

  return <Area {...config} style={{padding: "30px", height:"350px"}}  />;
};

export default VisitorGraph