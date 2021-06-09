import React, { useState } from 'react';
import Coin from "./Coin";
import "./Posts.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Posts = ({ coins }) => {
  const [search, setSearch] = useState('');
  const handleChange = e => {
    setSearch(e.target.value);

  };
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='coin-app'>
     <form className="searchContainer">
        
        <h1 className='coin-text'>Search a currency</h1>
       
        <div className="input-icons">
//         <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input 
        
        onChange={handleChange}
        placeholder="Search currency"
        type="text"/>
        </div>
          
        </form>
      
      <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
            <h1>Name</h1>
            <p className='coin-symbol'>Symbol</p>
          </div>
          <div className='coin-data'>
            <p className='coin-marketcap'>
              Market Cap
            </p>
            <p className='coin-price'>Price</p>
          </div>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <div>
            <Coin
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              marketcap={coin.total_volume}
            />
          </div>
        );
      })}

    </div>
  );
};

export default Posts;
