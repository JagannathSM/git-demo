import {useContext,useState,useEffect} from 'react'
import {CartContext,CartListContext,DataContext} from '../App'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';



function CartPage() {

    const Navigate = useNavigate()

    const [totalCartAmount,setTotalCartAmount] = useState(0);

    const cart_page_list = useContext(CartListContext)
    const [cartList,setCartList] = cart_page_list;

    const cart = useContext(CartContext)
    const [cartItems,setCartItems] = cart;

    const initialData = useContext(DataContext)
    const [mainData,setMainData] = initialData;

    // const changePrizeData = useContext(ButtonChangePrizeContext)
    // const [handleAddItem,handleRemoveItem] = changePrizeData


    const [open, setOpen] = useState(false);
    
    const handleCheckOut = () => {
        setOpen(true);
        setCartList([]);
        setCartItems(0);
        mainData.map((ele)=>{
            ele.inCart=false;
        })
        setMainData(mainData)

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };


    const grid_style = {
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center"
    }
   
    const handlePrice = () => {
        let ans =0;
        cartList.map((ele)=>{
            const total = ele.price * ele.defaultValue;
            const discountAmount =parseFloat(((total * ele.discountPercentage)/100).toFixed(2));
            const NetAmount = total - discountAmount;
            ans += NetAmount
        })
        setTotalCartAmount(parseInt(ans.toFixed(2)))
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

    const handleAddItem = (id,defaultValue) =>{
        console.log(id,defaultValue)
           cartList.map((ele)=>{
            if(ele.id == id && defaultValue < ele.stock){
                ele.defaultValue++
            }
           })
           setCartList(cartList)
           handlePrice()
    }

    const handleRemoveItem = (id,defaultValue) =>{
            cartList.map((ele)=>{
                if(ele.id == id && defaultValue > 1){
                    ele.defaultValue--
                }
               })
            setCartList(cartList)
            handlePrice()
    }


    useEffect(()=>{
        handlePrice();
    })

  return (
   <>
    { cartItems > 0 ? 
    <div>{cartList.map((ele)=>{
        
        const total = ele.price * ele.defaultValue;
        const discountAmount =parseFloat(((total * ele.discountPercentage)/100).toFixed(2));
        const NetAmount = total - discountAmount;
        return (
        <div key={ele.id}>
        <Grid container spacing={2} style={{borderBottom:"2px solid black", marginBottom:"15px", paddingBottom:"15px"}}>
            <Grid item xs={12} md={2} style={{display: "flex", justifyContent: "center"}}>
                <img src={ele.thumbnail} alt={ele.title} height="150"/>
            </Grid>
            <Grid item xs={12} md={4} style={{display: "flex",flexDirection: "column",alignContent:'center', justifyContent:"center",alignItems: "center"}}>
                <h3 style={{marginBottom:"3px"}}><b>{ele.brand} - {ele.title}</b></h3>
                <Button size='small' onClick={()=>Navigate(`/mobiledetails/${ele.id}`)}>Description</Button> 
                <p style={{margin:"5px", textAlign:"justify"}}>{ele.description}</p>
            </Grid>
            <Grid item xs={12} md={6} style={{alignContent:'center',alignItems: "center"}}>
                <Grid item xs={12} style={{display:"flex", justifyContent:"space-between",alignContent:'center',alignItems: "center",padding:"5px 10px"}}>
                <div>
                     <IconButton aria-label="decrement" onClick={()=>{handleRemoveItem(ele.id,ele.defaultValue)}}>  
                        <RemoveIcon />
                    </IconButton>{ele.defaultValue}
                    <IconButton aria-label="increment" onClick={()=>{handleAddItem(ele.id,ele.defaultValue)}}> 
                        <AddIcon />
                    </IconButton>
                </div>
                <div>
                    {total}
                </div>
                </Grid>
                <Grid item xs={12} style={{display:"flex", justifyContent:"space-between",alignContent:'center',alignItems: "center",padding:"5px 10px"}}>
                    <div>
                        Discounted Amount {ele.discountPercentage}% -
                    </div>
                    <div style={{textDecoration:"line-through"}}>
                        {discountAmount}
                    </div>
                </Grid>
                <Grid item xs={12} style={{display:"flex", justifyContent:"space-between",alignContent:'center',alignItems: "center",padding:"5px 10px"}}>
                    <div>
                        Net Amount -
                    </div>
                    <div style={{textDecoration:"solid",fontWeight:"bold"}}>
                        {NetAmount}
                    </div>
                </Grid>
                <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
                    <Button onClick={()=>{handleOnclickRemove(ele.id)}}>Remove</Button>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )})}
    </div>
         :
        <Grid item xs={12}>
            <div style={{display:"flex",color:"black",height:"150px", justifyContent:"center", marginBottom:"15px"}}>
                <Typography style={{alignContent:"center",fontSize:"large",fontWeight:"bold",textAlign: "center"}}>
                    Cart is Empty... Select Product to Cart first.
                </Typography>
            </div>
        </Grid>}
        <Grid container spacing={2}>
            <Grid item xs={6} sx={grid_style}>
                <Typography>
                   Sub-Total :
                </Typography>
            </Grid>
            <Grid item xs={6} sx={grid_style}>
                <Typography>
                    {totalCartAmount}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={grid_style}>
                <Typography>
                    Shipping :
                </Typography>
            </Grid>
            <Grid item xs={6} sx={grid_style}>
                <Typography style={{fontWeight:"bold"}}>
                    Free
                </Typography>
            </Grid>
            <Grid item xs={6} sx={grid_style}>
                <Typography>
                    <b>Total Cart Amount :</b>
                </Typography>
            </Grid>
            <Grid item xs={6} sx={grid_style}>
                <Typography>
                    <b>{totalCartAmount} $</b>
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                <Button variant="contained" color='warning' onClick={()=>{handleCheckOut();}} disabled={cartItems == 0 ? true : false} endIcon={<ShoppingCartCheckoutIcon />}>Click for CheckOut!</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Successfully CheckedOut!
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
   </>
  )
}

export default CartPage
