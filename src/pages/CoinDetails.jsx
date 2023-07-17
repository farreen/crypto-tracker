import React, { useEffect, useState } from 'react'
import { Container, LinearProgress, Typography } from '@mui/material';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext'
import { useParams } from 'react-router-dom';
import CoinInfo from "../components/CoinInfo";
import parse from 'html-react-parser';
import { numberWithCommas } from '../components/Banner/Carousel'
import "../App.css"


const CoinDetails = () => {
  const { currency, symbol } = CryptoState();
  const [coin, setCoin] = useState({});
  const { id } = useParams()

  const getSingleCoinData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log("SINGLE_COIN", data)
    setCoin(data);
  }
  useEffect(() => {
    getSingleCoinData();
  }, []);

  if (!coin) {
    return <LinearProgress style={{ backgroundColor: "gold" }} />
  }

  return (
    <div className='container'>
      <div className='sidebar'>
        <img src={coin?.image?.large}
          alt={coin?.name} height="200"
          style={{ marginBottom: "20px" }}
        />
        <Typography variant='h5' className='heading'>
          {coin?.name}
        </Typography>
        <Typography variant='subtitle' className='description'>
          {coin?.description?.en && parse(coin?.description?.en.split(".")[0])}
        </Typography>
        <div>
          <span style={{
            display: "flex"
          }}>
            <Typography variant='h6' className='heading'>
              Rank:
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant='h6' style={{ fontFamily: "Montserrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>

          <span style={{
            display: "flex"
          }}>
            <Typography variant='h6' className='heading'>
              CurrentPrice:
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant='h6' style={{ fontFamily: "Montserrat" }}>
              {symbol}{coin?.market_data?.current_price[currency.toLowerCase()]}
            </Typography>
          </span>
          <span style={{
            display: "flex"
          }}>
            <Typography variant='h6' className='heading'>
              Market Cap:
            </Typography>
            &nbsp;

            <Typography variant='h6' style={{ fontFamily: "Montserrat" }}>
              {symbol}{coin?.market_data?.market_cap[currency.toLowerCase()].toString().slice(0, -6)}M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinDetails

