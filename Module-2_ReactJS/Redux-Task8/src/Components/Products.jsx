import React, { useState } from 'react'
import { addCartItems, removeCartItems, setAllItems } from './MainSlice'
import { useDispatch,  useSelector } from "react-redux"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useEffect } from 'react';



function Products() {

    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const [dataToShow,setDataToShow] = useState(useSelector((state) => state.myCartData.allItems))


    const handleOnclickRemove = (id) =>{
        dispatch(removeCartItems(id))
        const updatedData = 
            dataToShow.map((ele)=>{
                if(ele.id == id){
                    return {...ele, inCart : false}
                }
                else {
                    return ele;
                }
            })
        setDataToShow(updatedData)
        dispatch(setAllItems(updatedData))
    }

    const handleOnclickAdd = (id) => {
        dispatch(addCartItems(id))
        const updatedData =
            dataToShow.map((ele)=>{
                if(ele.id == id){
                    return {...ele, inCart:true}
                }
                else {
                    return ele;
                }
            })
        setDataToShow(updatedData)
        dispatch(setAllItems(updatedData))
    }


    if(!dataToShow) return <p>Loading...</p>
  return (
    <>
   <div className='Card-Container'>
    {dataToShow.map((ele)=>(
        <Card  key={ele.id} sx={{display:"flex",flexDirection:"column", maxWidth: 300, margin:"20px", cursor: "pointer" , boxShadow:"2px 2px 5px lightgray" }} >
            <Grid xs={12}>
                <Typography  sx={{textAlign:"center", alignContent:'center',textTransform: "uppercase", paddingTop:"5px", fontSize:"15px"}} gutterBottom variant="h6" component="div">
                    {ele.category}
                </Typography>
            </Grid>
            <Grid xs={12} onClick={()=>Navigate(`/mobiledetails/${ele.id}`)}>
                <CardMedia
                    sx={{display:"flex", height: 300,padding:"10px 15px"}}
                    image={ele.thumbnail}
                    title={ele.title}
                />
            </Grid>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8} sx={{ display: "flex",justifyContent:"center"}}>
                        <Typography  sx={{height: "auto" ,alignContent:'center', fontSize:"medium", fontWeight:"bold", textAlign:"center"}} gutterBottom variant="h5" component="div">
                            {ele.brand} - {ele.title}
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={4} sx={{ display: "flex",justifyContent:"center"}}>
                        <Typography  sx={{ height: "auto" , alignContent:"center", fontSize:"medium", fontWeight:"bold", display: "flex", flexWrap:" wrap", justifyContent: "center"}} gutterBottom variant="h5" component="div">
                            <StarIcon sx={{color:"gold"}}/> {ele.rating}
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: "flex",justifyContent:"center"}}>
                        <Typography variant="body2" color="text.primary" sx={{textAlign:"center"}}>
                            In Stock - <b>{ele.stock}</b>
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: "flex",justifyContent:"center"}}>
                        <Typography variant="body2" color="text.primary" sx={{textAlign:"center"}}>
                            Price - <b>{ele.price} $</b>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                {ele.inCart ? <Button size='small' onClick={()=> handleOnclickRemove(ele.id)} variant="outlined" endIcon={<RemoveShoppingCartIcon />} sx={{marginBottom:"10px"}}>Remove From Cart</Button>:
                <Button size='small' onClick={()=>handleOnclickAdd(ele.id)} variant="outlined" endIcon={<AddShoppingCartIcon />} sx={{marginBottom:"10px"}}>Add to Cart</Button>} 
            </CardActions>
        </Card>
      )
      )}
   </div>
    </>
  )
}

export default Products
