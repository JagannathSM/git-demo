import React, { useState }from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useDispatch,  useSelector } from "react-redux"
import { addCartItems, removeCartItems, setAllItems } from './MainSlice'
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Grid from '@mui/material/Grid';


function ProductDetailPage() {
  const Navigate = useNavigate();
  const dispatch = useDispatch()

  const { id } = useParams();

  const data = useSelector((state) => state.myCartData.allItems)
  const [dataToShow,setDataToShow] = useState(data)

  const mobileDetailToShowArr = dataToShow.filter((ele)=>ele.id == id);
  const mobile_data = mobileDetailToShowArr[0];

  const disabledStyle = {
    color:"black",
  }

  const nodisabledStyle = {
    color:"blue",
  }

   //mobile_images contain array of images
   const mobile_images = mobile_data.images;

   const [showMobileIndex,setShowMobileIndex] = useState(0)
   const [nextDisabled,setNextDisabled] = useState(false)
   const [prevDisabled,setPrevDisabled] = useState(true)

  //function to show the next image in the mobile_images array
  const handleOnclickNextImage = () => {
    if(showMobileIndex < mobile_images.length-1){
      if(prevDisabled){
        setPrevDisabled(!prevDisabled)
      }
      setShowMobileIndex(showMobileIndex+1)
    }
    else{
      setNextDisabled(!nextDisabled)
    }
  }

  //function to show the previous image in the mobile_images array
  const handleOnclickPrevImage = () =>{
    if(showMobileIndex > 0){
      if(nextDisabled){
        setNextDisabled(!nextDisabled)
      }
      setShowMobileIndex(showMobileIndex-1)
    }
    else{
      setPrevDisabled(!prevDisabled)
    }
  }

  const img_src = mobile_images[showMobileIndex]

  //Add to cart function
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

  //Remove from cart function
  const handleOnclickRemove = (id) => {
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


  return (
    <>
      <Button variant="outlined" startIcon={<ArrowLeftIcon />} onClick={()=>{Navigate(-1)}}>Back</Button>
      <Grid container spacing={3} sx={{display:"flex", padding:"2px 35px"}}>
        <Grid item xs={12} sx={{display:"flex",alignItems:"center", justifyContent:"center"}}>
          <IconButton aria-label="prev_image" onClick={handleOnclickPrevImage} disabled={prevDisabled} sx={prevDisabled? disabledStyle : nodisabledStyle}>
            <ArrowBackIosNewIcon fontSize='large' />
          </IconButton>
            <img src={img_src} alt={mobile_data.title} className='Mobile_images'/>
          <IconButton aria-label="next_image" onClick={handleOnclickNextImage} disabled={nextDisabled} sx={nextDisabled? disabledStyle : nodisabledStyle}>
            <ArrowForwardIosIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{display:'flex', justifyContent:"center",textAlign:"center"}}>
          <Typography><b>{mobile_data.brand} - {mobile_data.title}</b></Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:"center", textAlign:"center"}}>
          <Typography>
            <b>Description - </b>{mobile_data.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', textAlign:"center",flexWrap:"wrap", alignContent:"center"}}>
            <Grid item xs={12} md={4} sx={{display:'flex', textAlign:"center",justifyContent:"center",padding:"5px"}}>
              <b>Rating : </b>{mobile_data.rating}
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex', textAlign:"center",justifyContent:"center",padding:"5px"}}>
              <b>Available Stock - </b>{mobile_data.stock}
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex', textAlign:"center",justifyContent:"center",padding:"5px"}}>
              <b>Price - </b>{mobile_data.price}<b>$</b>
            </Grid>
        </Grid>
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
          {mobile_data.inCart ? <Button size='small' onClick={()=> handleOnclickRemove(mobile_data.id)} variant="outlined" endIcon={<RemoveShoppingCartIcon />}>Remove From Cart</Button>:
          <Button size='small' onClick={()=>handleOnclickAdd(mobile_data.id)} variant="outlined" endIcon={<AddShoppingCartIcon />}>Add to Cart</Button>}
        </Grid>
      </Grid>
    </>
  )
}

export default ProductDetailPage
