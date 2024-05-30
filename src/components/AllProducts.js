import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';

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
  const [search,setSearch]=useState("")
  const handleChange=(e)=>{
    setSearch((e.target.value).toLowerCase())
    console.log(search)
  }
  useEffect(()=>{

  },[])

  return (
    <div style={{ padding:50 }}>
        <Box
        sx={{
          p: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField onChange={handleChange} label={"Search products here"} sx={
          {
            textTransform:"uppercase",
          }
        } />
        
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        
        {categories
        .filter((value)=>value.title.toLowerCase().includes(search))
        .map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              width="200"
              image={item.thumbnail}
              sx={
                {
                  objectFit:"cover"
                }
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {item.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="h5">₹{item.price}</Typography>
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

export default AllProducts;
