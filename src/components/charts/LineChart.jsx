import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { URL, apiKey } from '../utils/contants';

const LineChart = () => {
  const [user, setUser] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          'X-CMC_PRO_API_KEY': apiKey
        }
      });
      const data = await res.json();
      // console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  // console.log('data is here ', user);
  // console.log('sizeeee ', user?.data?.coins);

  const data = {
    labels:  user?.data?.coins?.map(value => value.name),
    datasets: [
      {
        label: `${user?.data?.coins.length|| 0} Coin-Data`,
       
         data: user?.data?.coins?.map(value => {
       
           {
            return (value.price/10);
          }
        }),
        backgroundColor: [
          'rgba(255, 127, 80, 1)',
          'rgba(127, 255, 0, 1)',
          'rgba(255, 255, 0, 0.8)',
          'rgba(128, 0, 128, 0.8)',
          'rgba(0, 128, 128, 0.6)',
          'rgba(238, 130, 238, 0.4)',
          'rgba(72, 61, 139, 0.8)'
        ],
        borderColor: [
          'rgb(0, 0, 0, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  return <Line data={data}  />;

};

export default LineChart;
