import React, { useEffect, useState } from 'react'
// import { Card, CardContent, CardMedia, Typography, Grid, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { Grid, grid2Classes } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {
    // const rows=[{employeeId:1,employeeName:"Anu Samu",department:"sales",location:"kollam"},
    //     {employeeId:2,employeeName:"Anju",department:"sales",location:"tvm"},
    //     {employeeId:3,employeeName:"Priyanka",department:"sales",location:"alp"}
    // ]

    const [rows,setRows]=useState([]);
    // connecting external API
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then((res)=>{
          setRows(res.data);
      // axios.get('https://dummyjson.com/users').then((res)=>{
      //   setRows(res.data.users);

      })

    },[])
  return (
    
    <Grid container spacing={2}>
    {rows.map((row) => (
      <Grid item xs={12} sm={6} md={4} key={row.title}>
        <Card sx={{ maxWidth: 345,  display:'flex',flexDirection:'colown',height:'100%'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
    
              image={row.image}
              alt={row.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" align="left">
                Price: {row.price}    

              </Typography>
              <Typography gutterBottom variant="body1" component="div" align="left">
                Rate: {row.rating.rate}
              </Typography>
              <Typography gutterBottom variant="body1" component="div"  align="left" >
                Count: {row.rating.count}
              </Typography>
              <Typography gutterBottom variant="body1" component="div"  align="left" >
              <Button variant="contained" sx={{backgroundColor:'#A594F9'}} align="right">buy</Button>
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
  
);
}

export default Home