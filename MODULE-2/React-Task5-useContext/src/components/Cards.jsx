import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {CartListContext,CartContext,DataContext} from '../App'
import {useContext} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';



function Cards({data}) {

  const Navigate = useNavigate()

  const cart = useContext(CartContext)
  const MobileDataList = useContext(DataContext)
  const updatedCartList = useContext(CartListContext)

  const [mainData,setMainData] = MobileDataList
  const [cartItems,setCartItems] = cart;
  const [cartList,setCartList] = updatedCartList;


  const handleOnclickAdd = (id) => {
    setCartItems(cartItems+1);
    setMainData (
      mainData.map((ele)=>{
          if(ele.id == id){
            setCartList([...cartList,ele])
            return {...ele, inCart:true}
          }
          else {
              return ele;
          }
      })
  )
  }

  const handleOnclickRemove = (id) => {
    setCartItems(cartItems-1);
    setMainData (
      mainData.map((ele)=>{
          if(ele.id == id){
              return {...ele, inCart:false}
          }
          else {
              return ele;
          }
      })
  )

  const afterDelete = cartList.filter((ele)=> ele.id != id)
        setCartList(afterDelete)
  }

  return (
    <>
      <Card sx={{display:"flex",flexDirection:"column", maxWidth: 300, margin:"20px", cursor: "pointer" , boxShadow:"2px 2px 5px lightgray" }} >
        <Grid xs={12}>
          <Typography  sx={{textAlign:"center", alignContent:'center',textTransform: "uppercase", paddingTop:"5px", fontSize:"15px"}} gutterBottom variant="h6" component="div">
            {data.category}
          </Typography>
        </Grid>
        <Grid xs={12} onClick={()=>Navigate(`/mobiledetails/${data.id}`)}>
          <CardMedia
            sx={{display:"flex", height: 300,padding:"10px 15px"}}
            image={data.thumbnail}
            title={data.title}
          />
        </Grid>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={12} md={8} sx={{ display: "flex",justifyContent:"center"}}>
            <Typography  sx={{height: "auto" ,alignContent:'center', fontSize:"medium", fontWeight:"bold", textAlign:"center"}} gutterBottom variant="h5" component="div">
              {data.brand} - {data.title}
            </Typography>
          </Grid>
          <Grid xs={12} md={4} sx={{ display: "flex",justifyContent:"center"}}>
            <Typography  sx={{ height: "auto" , alignContent:"center", fontSize:"medium", fontWeight:"bold", display: "flex", flexWrap:" wrap", justifyContent: "center"}} gutterBottom variant="h5" component="div">
              <StarIcon sx={{color:"gold"}}/> {data.rating}
            </Typography>
          </Grid>
          <Grid xs={12} md={6} sx={{ display: "flex",justifyContent:"center"}}>
            <Typography variant="body2" color="text.primary" sx={{textAlign:"center"}}>
              In Stock - <b>{data.stock}</b>
            </Typography>
          </Grid>
          <Grid xs={12} md={6} sx={{ display: "flex",justifyContent:"center"}}>
            <Typography variant="body2" color="text.primary" sx={{textAlign:"center"}}>
              Price - <b>{data.price} $</b>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    <CardActions sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
      {data.inCart ? <Button size='small' onClick={()=> handleOnclickRemove(data.id)} variant="outlined" endIcon={<RemoveShoppingCartIcon />} sx={{marginBottom:"10px"}}>Remove From Cart</Button>:
      <Button size='small' onClick={()=>handleOnclickAdd(data.id)} variant="outlined" endIcon={<AddShoppingCartIcon />} sx={{marginBottom:"10px"}}>Add to Cart</Button>} 
    </CardActions>
  </Card>

    </>
  )
}

export default Cards
