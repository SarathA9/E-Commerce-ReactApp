import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
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
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'left',
});

const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
});

function AllProducts() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res, 111);
        setCategories(res.data.products); 
      })
      .catch((err) => {
        console.log(err, 222);
      });
  }, []);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    console.log(search);
  };

  return (
    <div style={{ padding: 50 }}>
      <Box
        sx={{
          p: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={handleChange}
          label={"Search products here"}
          sx={{
            textTransform: "uppercase",
          }}
        />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {categories
          .filter((value) => value.title.toLowerCase().includes(search))
          .map((item) => (
            <StyledCard key={item.id}>
              <StyledCardMedia
                component="img"
                alt={item.title}
                image={item.images[0]}
              />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </StyledCardContent>
              <StyledCardActions>
                <Typography variant="h5">₹{item.price}</Typography>
                <Typography variant="h6" style={{ textAlign: "end" }}>
                  {item.brand}
                </Typography>
              </StyledCardActions>
            </StyledCard>
          ))}
      </Grid>
    </div>
  );
}

export default AllProducts;
