import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Shop2Outlined } from "@mui/icons-material";

export default function Category() {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((res)=>{
      console.log(res,111)
      setCategories(res.data)
    })
    .catch((res)=>{
      console.log(res,222)
    })

  },[])
  return (
    <div style={{ marginTop: 10 }}>
      <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            padding: 3,
            width: 128,
            height: 128,
          },
        }}
      >
        {categories.map((item)=>{
          return(
            <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{
              height: "100%",
              padding: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={`/Products/${item.slug}`}sx={{
              textDecoration:"none"
            }}>
              <Typography sx={{
                fontFamily:"monospace",
                textTransform:"uppercase"
              }}>{item.name}</Typography>
            </Link>
          </Paper>
        </Grid>


          )
        })}
              </Grid>
    </div>
  );
}
