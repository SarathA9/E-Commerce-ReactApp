import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

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
    <div style={{ marginTop: 10, padding: 20 }}>
      <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1>
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
                backgroundColor: "#09824b",
              }}
            >
              <Link to={`/Products/${item.slug}`} style={{ textDecoration: "none" }}>
                <Typography sx={{ textTransform: "uppercase", color: "white" }}>
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
