import React from 'react';
import SavedCoin from "./SavedCoin";

const SavedPosts = ({ coins}) => {
    
    return (
        <div className='coin-app'>
         {coins.map(coin => {
        return (
          <div>
            <SavedCoin
              name={coin.name}
              symbol={coin.symbol}
              price={coin.price}
              marketcap={coin.marketCap}
            />
         
          </div>
         );
      })}
     
     </div>
      );
};

export default SavedPosts;