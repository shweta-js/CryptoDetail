import React from 'react';
import './Coin.css';
import SavedButton from './Components/SavedButton';
import Data from "./SaveDataModel"


const SavedCoin = ({
  name:name,
  price:price,
  symbol:symbol,
  marketcap:marketCap,
  
}) => {
  const data =()=>{
   let mydata = new Data({
   SavedCoin
   })
    
   
}
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
        <p className='coin-marketcap'>
         ${marketCap}
          </p>
         
          <SavedButton value={{name,symbol,price,marketCap}}/>
          
          <p className='coin-price'>${price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default SavedCoin;
