import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HeroCard from "./Components/HeroCard"
import SavedPosts from "./SavedPosts"
import Pagination from './Pagination';
import google from "./Assets/GOOGL.png";
import fb from "./Assets/FB.png";
import amazon from "./Assets/AMZN.svg";
import Draggable from 'react-draggable';
import { useHistory } from "react-router-dom";


function App() {
  
  const history = useHistory();
  const [coins, setCoins] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  var GoBack=()=>{
         
    history.push("/");   
    }

 
  useEffect(() => {
    const fetchCoin =async (resp,req)=>{
      const res = await  axios({
        method: 'get',
        url: "https://immense-fortress-76085.herokuapp.com",
        headers: {}, 
        data: {
         resp

        }
        
      });
      
     setCoins(res.data);
    //  console.log(coins);
    }
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
     {console.log(coins)}
      <SavedPosts coins={coins} />
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={coins.length}
        paginate={paginate}
      />
    <button 
    className="back-button"
    onClick={GoBack}
    >Back</button>
    </div>
  );
}

export default App;
