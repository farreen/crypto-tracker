import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SingleCoin } from "../config/api";
import { makeStyles } from "@mui/material";
import Header from "./Header";
const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState()
  useEffect(() => {
    getSingleCoinData(id);
  }, [id]);
  const getSingleCoinData = async(id) => {
    const response = await axios.get(SingleCoin(id));
    console.log("SINGLE_COIN_DATA", response?.data);
    setcoin(response?.data);
  }
  // const useStyles = makeStyles((theme) => ({
  //   container:{
  //     display: "flex",
  //     [theme.breakpoints.down("md")]: {
  //       flexDirection: "column",
  //       alignItem: "center"
  //     }
  //   },
  // }))
  // const classes = useStyles();
  return (
    <div className="coinDetails">
      {/* <Header/> */}
      details
    </div>
  );
};

export default CoinDetails;
