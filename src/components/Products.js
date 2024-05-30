import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


function Products() {
  const { categoryName } = useParams(); // Destructure categoryName from useParams
  const [products, setProducts] = useState([]); // Initialize as an array

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data.products); // Set the products array
        console.log(res, 111);
      })
      .catch((err) => {
        console.log(err, 2222);
      });
  }, [categoryName]); // Add categoryName as a dependency

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          padding:"30px"
        }}
      >
        {products.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              width="200"
              image={item.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                textTransform="uppercase"
              >
                {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="h5">${item.price}</Typography>
              <Typography
                variant="h5"
                style={{ textAlign: "end", width: "100%" }}
              >
                {item.brand}
              </Typography>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
