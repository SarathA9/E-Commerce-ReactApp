import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 300,
  padding: 16,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  width: '100%',
  objectFit: 'contain',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)', // Scale the image on hover
  },
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'left',
});

const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
});

function Products() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res, 111);
      })
      .catch((err) => {
        console.log(err, 2222);
      });
  }, [categoryName]);

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          padding: "30px",
        }}
      >
        {products.map((item) => (
          <StyledCard key={item.id}>
            <StyledCardMedia
              component="img"
              alt={item.title}
              image={item.images[0]}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h5" component="div" className="rajdhani-semibold">
                {item.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                textTransform="uppercase"
                className="rajdhani-regular"
              >
                {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="rajdhani-light">
                {item.description}
              </Typography>
            </StyledCardContent>
            <StyledCardActions>
              <Typography variant="h5" className="rajdhani-bold">${item.price}</Typography>
              <Typography
                variant="h5"
                style={{ textAlign: "end", width: "100%" }}
                className="rajdhani-medium"
              >
                {item.brand}
              </Typography>
            </StyledCardActions>
          </StyledCard>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
