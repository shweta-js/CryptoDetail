import React, { useState, useEffect } from 'react';
import "./SavedButton.css";
import Data from "../SaveDataModel"
import axios from 'axios';
// https://immense-fortress-76085.herokuapp.com
function Button(value) {
    
    var [viewButton, setViewButton]=useState(true)
   
       
          var deletedata =(e)=>{
            setViewButton(false);
            axios({
                method: 'delete',
                url: `https://immense-fortress-76085.herokuapp.com/${value.value.name}`,
                headers: {}, 
                data: {
                  name:value.value.name, 
                  symbol:value.value.symbol,
                  marketCap:value.value.marketCap,
                  price:value.value.price
    
                }
              });
              window.location.reload();
              console.log(value.value.name)
            }
    return (

        <div>
            {viewButton?
                <button className="delete-btn" value={value} onClick={deletedata}>Delete</button>
                :
               ""
                
            }
        </div>
    )
}

export default Button
