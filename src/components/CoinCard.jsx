import React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        onClick={() => navigate(`/details/${coin.id}`)}
        style={{
          backgroundColor: "lightBlue",
          cursor: "pointer",
        }}
      >
        <CardHeader
          style={{marginLeft: "90px" }}
          // avatar={
          //   <Avatar
          //     aria-label="coin logo"
          //     style={{
          //       width: "30px",
          //       height: "30px",
          //       fontSize: "12px",
          //     }}
          //   >
          //     {coin.symbol}
          //   </Avatar>
          // }
          title={coin.name}
        />
        <CardMedia
          // height="100px"
          component="img"
          image={coin.image}
          alt="coin image"
        />
      </Card>
    </div>
  );
};
export default CoinCard;
