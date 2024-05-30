import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './style.css'

function Home() {
  return (
    <div className='container'>
      <div className='sub-containier'>
      <h1 className='heading'>Welcome to our store</h1>
      <p>Discover the best product at unbeatable price</p>
      <a href='/category'>      <Button variant="outlined" endIcon={<SendIcon />}>
        SHOP NOW
      </Button></a>

      </div>
      <div className='sub-container'>
        <img src='https://www.pixel-studios.com/ecommerce-website-development/images/hero-illustration-2.png'></img>
      </div>
    </div>
  );
}

export default Home;