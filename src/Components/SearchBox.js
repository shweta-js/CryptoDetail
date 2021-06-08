import React from 'react'
import "./SearchBox.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBox() { 
    return (
        <div>
            
            <div className="searchBox">
                <h2>Stock Details Table</h2>
            
               
                <div className="input-icons">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />

                <input className="input-field" placeholder="Search by Company Name" type="text"/>
                </div>
                
            </div>
        </div>
    )
}

export default SearchBox
