import React from 'react';
import './Coin.css';
import Button from './Components/Button';
import Data from "./SaveDataModel"


const Coin = ({
  name:name,
  price:price,
  symbol:symbol,
  marketcap:marketCap,
  
}) => {
  const data =()=>{
   let mydata = new Data({
    Coin
   })
    console.log(mydata);
    mydata.save().then(item => {
        console.log("Name saved to database");
    })
    .catch(err => {
        console.log("Unable to save to database");
    });
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
         ${marketCap.toLocaleString()}
            
          </p>
         
          <Button value={{name,symbol,marketCap,price}}/>
          
          <p className='coin-price'>${price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Coin;
