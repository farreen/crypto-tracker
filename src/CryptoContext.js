import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const Crypto = createContext();

export const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹")
    } else if (currency === "USD") {
      setSymbol("$")
    }
  }, [currency]);

  return (
    <div>
      <Crypto.Provider value={{ currency, symbol, setCurrency }}>
        {children}
      </Crypto.Provider>
    </div>
  )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto);
} 