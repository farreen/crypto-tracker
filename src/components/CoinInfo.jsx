import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../config/api'
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { Doughnut, Line } from 'react-chartjs-2';
import { CircularProgress } from '@mui/material';
import Chart from 'chart.js/auto';
import "../App.css";

const CoinInfo = ({ coin }) => {
  const [historicalChartData, setHistoricalChartData] = useState([]);
  const [day, setDay] = useState(1)
  const { currency } = CryptoState();
  const getChartData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, day, currency));
    console.log("CHART_DATA", data);
    setHistoricalChartData(data.prices);
  }
  useEffect(() => {
    getChartData();
  }, [coin.id]);

  return (
    <div className='graphContainer'>
      <div>
        {
          !historicalChartData ? (
            <CircularProgress style={{
              color: "gold",
            }}
              size={250}
              thickness={1}
            />
          ) : (
            <div>
              <Line
                data={{
                  labels: historicalChartData?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time = date.getHours() > 12 ? `${date.getHours() - 12}: ${date.getMinutes()}PM` :
                      `${date.getHours()}: ${date.getMinutes()}AM`
                    console.log("hours", time)
                    return day === 1 ? time : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: historicalChartData?.map((coin) => coin[1]),
                      label: "prices",
                      borderColor: "gold",

                    }
                  ]
                }}
              />
            </div>
          )
        }
      </div>
      {/* <div>buttons</div> */}
    </div>

  )
}

export default CoinInfo
