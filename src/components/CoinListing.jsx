import "../App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import {useNavigate } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
function Coins() {
  const inputRef = useRef();
  console.log("REF", inputRef);
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllCoins();
  }, []);

  const getAllCoins = async () => {
    // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=marketcapdesc&perpage=100&page=1&sparkline=false"
    //"http://localhost:8080/api/getCoins"
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=marketcapdesc&perpage=100&page=1&sparkline=false"
    );
    console.log("RESPONSE_DATA", data?.data);
    if (data?.status === 200) {
      setCoins(data?.data);
      setLoading(false);
    }
  };

  // const breakpointColumnsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1,
  // };

  return (
    <div>
      <h1 className="header">welcome to the cryptochecker</h1>
      <div style={{paddingLeft: "12px"}}>
      {

        <Masonry columns={5} spacing={2}>
          {coins && !isLoading
            ? coins.map((coin, index) => (
                <Card
                  onClick={() => navigate(`/details/${coin.id}`)}
                  style={{ backgroundColor: "lightBlue", cursor: "pointer" }}
                >
                  <CardHeader
                  style={{alignItems: "center", padding: "5px"}}
                    avatar={
                      <Avatar aria-label="coin logo" style={{width: "30px", height: "30px"}}>
                        {coin.symbol}
                      </Avatar>
                    }
                    title={coin.name}
                  />

                  <CardMedia
                    height="100px"
                    component="img"
                    image={coin.image}
                    alt="coin image"
                  />
                </Card>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                (index) => (
                  // <Card>
                  //   <CardHeader
                  //     avatar={
                  //       <>
                  //         <Skeleton variant="circular" width={30} height={30} />
                  //         <Skeleton variant="text" height={20} width={60} />
                  //       </>
                  //     }
                  //   ></CardHeader>

                  //   <CardMedia height="100px">
                  //     <Skeleton
                  //       variant="rectangular"
                  //       width={150}
                  //       height={60}
                  //       animation="wave"
                  //     />
                  //   </CardMedia>
                  // </Card>
                  <CardSkeleton/>
                )
              )}
        </Masonry>
      }
      </div>
    </div>
  );
}

export default Coins;
