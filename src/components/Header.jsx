import React, { useState, useEffect } from "react";
import "../styles/App.css";
import {
  AppBar,
  MenuItem,
  Select,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";


const Header = () => {
  const navigate = useNavigate();
  const {currency, setCurrency} = CryptoState();
  console.log("currency", currency)
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography 
          style={styles.title}
            onClick={() => {navigate('/')}}
          > 
            Crypto Tracker
          </Typography>
          <Select 
          style={{width: 100, height: 40, color: "#FFFFFF"}}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value='USD'>USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;


const styles = {
  title:{
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
  }
}