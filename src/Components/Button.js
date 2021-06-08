import React, { useState } from 'react';
import "./Button.css";
import { useHistory } from "react-router-dom";

import axios from 'axios';

function Button(value) {
  const history = useHistory();
    var [saveButton,setSaveButton]=useState(true);

    var savedata =()=>{
        setSaveButton(false);
        axios({
            method: 'post',
            url: " https://morning-coast-89466.herokuapp.com/",
            headers: {}, 
            data: {
              name:value.value.name, 
              symbol:value.value.symbol,
              marketCap:value.value.marketCap,
              price:value.value.price

            }
          });
        }
        var Viewdata=()=>{
         
          history.push("/saved");   
          }
         
    return (

        <div>
            {saveButton?
                <button className="save-btn" value={value} onClick={savedata}>Save Data</button>
                :
                <button className="view-btn" value={value} onClick={Viewdata}>View Data</button>
                
            }
        </div>
    )
}

export default Button
