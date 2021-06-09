import React, { useState } from 'react';
import "./SavedButton.css";

import axios from 'axios';

function Button(value) {
    
    var [viewButton, setViewButton]=useState(true)
   
       
          var deletedata =(e)=>{
            setViewButton(false);
            axios({
                method: 'delete',
                url: ` https://morning-coast-89466.herokuapp.com/${value.value.name}`,
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
