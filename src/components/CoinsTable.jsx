import React, { useEffect, useState } from 'react'
import { LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, colors } from '@mui/material'
import axios from 'axios';
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './Banner/Carousel';


const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const { currency, symbol } = CryptoState();
    const navigate = useNavigate();

    const getcoinList = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency))
        setCoins(data);
        console.log("dataa", data)
        setLoading(false)
    }

    useEffect(() => {
        getcoinList()
    }, [currency]);

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        ))
    }
    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <Typography
                    variant='h4'
                    style={{ margin: 18, fontFamily: "Montserrat", color: "white" }}
                >
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField
                    label="Search for a crypto currency..." variant='outlined'
                    style={{ width: "100%", marginBottom: "20" }}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <TableContainer>

                    {loading ? (
                        <LinearProgress style={{ backgroundColor: "gold" }} />
                    ) : (
                        <Table>
                            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                                <TableRow>
                                    {
                                        ["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                            <TableCell style={{ color: "black", fontWeight: "700", fontFamily: "Montserrat" }}
                                                key={head}
                                                align={head == "Coin" ? "" : "right"}
                                            >
                                                {head}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    handleSearch().map((coin) => {
                                        const profit = coin.price_change_percentage_24h > 0;
                                        return (
                                            <TableRow onClick={() => {
                                                navigate(`/coin/${coin.id}`)
                                                // style={{}}
                                                // key={coin.name}
                                            }}>
                                                <TableCell
                                                    component="th"
                                                    scope='row'
                                                    styles={{
                                                        display: "flex",
                                                        gap: "15",
                                                    }}
                                                >
                                                    <img
                                                        src={coin.image}
                                                        alt={coin.name}
                                                        height="50"
                                                        style={{ marginBottom: "10" }}
                                                    />
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}>
                                                        <span style={{
                                                            textTransform: "uppercase",
                                                            fontSize: "22"
                                                        }}>
                                                            {coin.symbol}
                                                        </span>
                                                        <span>
                                                            {coin.name}
                                                        </span>
                                                    </div>
                                                </TableCell>

                                                <TableCell
                                                    align="right"
                                                >
                                                    {symbol}{" "}{numberWithCommas(coin.current_price.toFixed(2))}
                                                </TableCell>
                                                <TableCell
                                                    align="right"
                                                    style={{
                                                        color: profit > 0 ? "rgb(14, 203, 129)" : "red"
                                                    }}
                                                >
                                                    {profit && "+"}{coin.price_change_percentage_24h.toFixed(2)}%
                                                </TableCell>
                                                <TableCell
                                                    align='right'
                                                >
                                                    {symbol} {" "} {
                                                        numberWithCommas(coin?.market_cap.toString().slice(0, -6))
                                                    }M
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>
            </Container>
        </div>
    )
}

export default CoinsTable