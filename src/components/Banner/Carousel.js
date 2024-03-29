import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Carousel = () => {
  const { currency, symbol } = CryptoState();
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("user_credentials") || false)
  const navigate = useNavigate();
  
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log("ress", data);
    setTrendingCoins(data);
  }


  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trendingCoins.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0
    return (
      <span style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
      }}
        onClick={() => {
          isLoggedIn ?
            (navigate(`/coinDetails/${coin.id}`)
            ) : (
              toast.warning("Plese create account to check details")
            )
        }}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: "10" }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: "500"
            }}
          >
            {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: "22", fontWeight: "500" }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </span>
    )
  })
  const resposive = {
    0: {
      items: 2,
    },
    512: {
      items: 4
    }
  }
  return (
    <div style={{
      height: "50%",
      display: "flex",
      alignItems: "center",
    }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        responsive={resposive}
        autoPlay
        items={items}
        disableDotsControls
      />
    </div>
  )
}

export default Carousel
