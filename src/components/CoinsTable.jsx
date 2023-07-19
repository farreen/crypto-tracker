import React, { useEffect, useState } from 'react'
import { LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, colors } from '@mui/material'
import axios from 'axios';
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './Banner/Carousel';
import '../styles/App.css'


const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1);
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
                    className='textArea'
                    label="Search for a crypto currency..." variant='outlined'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <br/>
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
                                    handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin) => {
                                        const profit = coin.price_change_percentage_24h > 0;
                                        return (
                                            <TableRow onClick={() => {
                                                navigate(`/coinDetails/${coin.id}`)
                                            }}
                                                className='tableRow'
                                                key={coin.name}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope='row'
                                                    className='tableCell'
                                                >
                                                    <img
                                                        src={coin.image}
                                                        alt={coin.name}
                                                        height="50"
                                                        style={{ marginBottom: "10" }}
                                                    />
                                                    <div
                                                    className='coinInfo'
                                                    >
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
                <Pagination
                    className='pagination'
                    count={(handleSearch().length / 10).toFixed(0)}
                    onChange={(value) => {
                        setPage(value);
                        window.scroll(0, 150);
                    }}
                />

            </Container>
        </div>
    )
}

export default CoinsTable