import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HeroCard from "./Components/HeroCard"
import Posts from "./Posts"
import Pagination from './Pagination';
import google from "./Assets/GOOGL.png";
import fb from "./Assets/FB.png";
import amazon from "./Assets/AMZN.svg";
import Draggable from 'react-draggable';

function App() {
  

  const [coins, setCoins] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
 
  const URL=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
 
  useEffect(() => {
    const fetchCoin =async ()=>{
      const res = await axios
      .get(
       URL
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
    };
    fetchCoin();
  }, []);

 
 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='coin-app'>
     <div className="HeroCard-container">
     <Draggable><div>
     <HeroCard
     name="GOOGL"
     value="1515 USD"
     image={google}
     /></div></Draggable>
     <Draggable><div><HeroCard
     name="FB"
     value="1515 USD"
     image={fb}
     /></div></Draggable>
     <Draggable><div><HeroCard
     name="AMZN"
     value=" 3166 USD"
     image={amazon}
     /></div></Draggable>
     </div>
      <Posts coins={currentPosts} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={coins.length}
        paginate={paginate}
      />
    
    </div>
  );
}

export default App;
