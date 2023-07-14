// import "../App.css";
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import Masonry from "@mui/lab/Masonry";
// // import Masonry from "@mui/lab/Masonry";
// import Card from "react-masonry-css";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import Avatar from "@mui/material/Avatar";
// import { useNavigate } from "react-router-dom";
// import CardSkeleton from "./CardSkeleton";
// import { Button } from "react-bootstrap";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { CoinList } from "../config/api";
// import CoinCard from "./CoinCard";

// function Coins() {
//   const inputRef = useRef();
//   console.log("REF", inputRef);
//   const [isLoading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [hasMore, setHasmore] = useState(true);
//   const [page, setPage] = useState(2);
//   const navigate = useNavigate();
//   useEffect(() => {
//     getAllCoins();
//   }, []);

//   const getAllCoins = async () => {
//     console.log("PAGE_NUMBERS", page);
//     // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=marketcapdesc&perpage=100&page=1&sparkline=false"
//     //"http://localhost:8080/api/getCoins"
//     const data = await axios.get(CoinList());
//     console.log("RESPONSE_DATA", data?.data);
//     if (data?.status === 200) {
//       let resData = data?.data;
//       setCoins(resData);
//       setLoading(false);
//     }
//   };

//   const getMoreData = async () => {
//     console.log("INSIDE_GETMORE", page);
//     const data = await axios.get(
//       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
//     );
//     console.log("RES_DATA", data?.data);
//     let newCoins = data?.data;
//     setCoins([...coins, ...newCoins]);
//     setPage(page + 1);
//     if (coins.length < 10) {
//       setHasmore(false);
//     }
//   };

//   // default: 4,
//   //   1100: 3,
//   //   700: 2,
//   //   500: 1,
//   const breakpoint = {
//     default: 3,
//     1100: 2,
//     700: 1,
//   };

//   return (
//     <div className="App">
//       <div style={{ paddingLeft: "12px" }}>
//         {
//           // <InfiniteScroll
//           //   dataLength={coins.length}
//           //   next={getMoreData}
//           //   hasMore={hasMore}
//           //   loader={<p style={{ textAlign: "center" }}>loading...</p>}
//           // >
//           <Masonry
//             // columns={5}
//             // spacing={2}
//             // breakpointColumnsObj={breakpointColumnsObj}
//             breakpointcol={breakpoint}
//             className="my-masonry-grid"
//             columnClassName="my-masonry-grid_column"
//           >
//             {coins && !isLoading
//               ? coins.map((coin, index) => (
//                   <div>
//                     <CoinCard coin={coin} />
//                   </div>
//                 ))
//               : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
//                   // <Card>
//                   //   <CardHeader
//                   //     avatar={
//                   //       <>
//                   //         <Skeleton variant="circular" width={30} height={30} />
//                   //         <Skeleton variant="text" height={20} width={60} />
//                   //       </>
//                   //     }
//                   //   ></CardHeader>

//                   //   <CardMedia height="100px">
//                   //     <Skeleton
//                   //       variant="rectangular"
//                   //       width={150}
//                   //       height={60}
//                   //       animation="wave"
//                   //     />
//                   //   </CardMedia>
//                   // </Card>
//                   <CardSkeleton />
//                 ))}
//           </Masonry>
//           // </InfiniteScroll>
//         }
//       </div>
//     </div>
//   );
// }

// export default Coins;


import React from 'react'
import Banner from './Banner/Banner'
import CoinsTable from './CoinsTable'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <CoinsTable/>
    </>
  )
}

export default HomePage

