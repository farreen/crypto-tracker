import React from 'react';
import '../App.css'
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams();
    // console.log("inside coin details")
    return (
        <div className='detailsHeroCard'>
            <h1>Coin id: {id}</h1>
        </div>
    )
}

export default CoinDetails;