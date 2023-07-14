import React from 'react'
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'


const Banner = () => {
    console.log("Sty", styles)
    return (
        <div style={{backgroundImage: `url(banner2.jpg)`}}>
            <Container style={{
                 height: "600",
                 display: "flex",
                 flexDirection: "column",
                 paddingTop: "25",
                 justifyContent: "space-around",
                 
            }}>
                <div style={{
                    display: "flex",
                    height: "40%",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                    <Typography 
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto Tracker
                    </Typography>
                    <Typography 
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat"
                        }}
                    >
                        Get all the Info regarding your favourite Crypto Coin 
                    </Typography>
                </div>
                <Carousel/>
            </Container>

        </div>
    )
}

export default Banner


const styles = {
    // banner: {
    //     backgroundImage: `url(banner2.jpg)`,
    // },
    bannerContent: {
        height: "400",
        display: "flex",
        flexDirection: "column",
        paddingTop: "25",
        justifyContent: "space-around",

    },
    tagLine: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "glod"

    }
}