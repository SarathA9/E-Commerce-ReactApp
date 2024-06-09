import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Bg from './assets/bg2.jpg';

export default function Category() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        console.log(res, 111);
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error, 222);
      });
  }, []);

  return (
    <div style={{ marginTop: 10, padding: 0,textAlign:"center" }}>
      {/* <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1> */}
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            padding: 3,
            height: 128,
          },
        }}
      >
        {categories.map((item) => (
          <Grid item xs={6} sm={3} key={item.id}>
            <Paper
              elevation={3}
              style={{
                height: "100%",
                padding: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(to right, rgba(255, 140, 0, 0.8), rgba(255, 69, 0, 0.6)), url(${Bg})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'center',
                objectFit: 'contain',
                color:"black"
              }}
            >
              <Link to={`/Products/${item.slug}`} style={{ textDecoration: "none" }}>
                <Typography sx={{ textTransform: "uppercase", color: "black",fontWeight:"500",fontFamily:"Rajdhani" }}>
                  {item.name}
                </Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
