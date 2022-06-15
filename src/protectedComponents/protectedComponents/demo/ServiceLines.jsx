import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { services } from '../../assets/dummy/serviceStats';

const ServiceLines = () => {
  const [data, setData] = useState([...services]);

  

  const config = {
    data,
    xField: 'week',
    yField: 'times',
    seriesField: 'category',
    // yAxis: {
    //   label: "times"
    // },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} style={{padding: "30px", height:"350px"}} />;
};

export default ServiceLines