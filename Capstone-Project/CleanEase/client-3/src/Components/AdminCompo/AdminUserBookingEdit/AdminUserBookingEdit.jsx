import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobal } from '../../../GlobalContext/GlobalProvider';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Switch, FormControlLabel } from '@mui/material';

function AdminUserBookingEdit() {
    const navigate = useNavigate();
    const { bookingID } = useParams();

    const {allBookings, updateUserBooking} = useGlobal();
    const [bookingToEdit,setBookingToEdit] = useState('');
    const [isConfirmed, setIsConfirmed] = useState('');
    const [status, setStatus] = useState('');
    const [adminUpdateBookingError, setAdminUpdateBookingError] = useState('');

    useEffect(()=>{
        if(adminUpdateBookingError){
            toast.error(adminUpdateBookingError, {
                position: "top-right",
                autoClose: 5000, // Automatically close after 5 seconds
            });
        }
      },[adminUpdateBookingError])

    useEffect(()=>{
        if(allBookings.length > 0){
            const returnData = allBookings.filter((ele)=> ele._id == bookingID);
            setBookingToEdit(returnData[0]);
            setStatus(returnData[0].status);
            setIsConfirmed(returnData[0].isConfirmed);
        }
    },[allBookings])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(bookingToEdit);
        const UpdatedData = {
            userId: bookingToEdit.user,
            isConfirmed,
            status,
        }
        try{
            await updateUserBooking(bookingID,UpdatedData);
            toast.success('Booking updated successfully.', {
                position: "top-right",
                autoClose: 5000,
            });
        } catch (err){
            if (err.message == "Network Error") {
                setAdminUpdateBookingError("Connection timeout! / DB not responding");
              } else if (err.response.status == 400) {
                setAdminUpdateBookingError(err.response.data);
              } else {
                setAdminUpdateBookingError(err.message);
              }    
        }
    }

    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
      };  
  
  return (
    <>
    {bookingToEdit && (
        <>
        <Container maxWidth="sm" sx={{ backgroundColor:"#f1f1f1", marginTop: '3rem', marginBottom: '3rem', padding: '1rem', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>
            <Typography component="h1" variant="h5" sx={{ fontWeight: '900', textAlign: 'center', marginBottom: '2rem' }}>
                Update User Booking
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={bookingToEdit.username}
                    disabled={true}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="date"
                    label="Service Date"
                    name="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={formatDateTime(bookingToEdit.startDate)}
                    disabled
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="servicetype"
                    label="Service Type"
                    name="serviceType"
                    value={bookingToEdit.serviceType}
                    disabled
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e)=> setStatus(e.target.value)}
                        label="Status"
                    >
                        <MenuItem value="Ongoing">Ongoing</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Not Completed">Not Completed</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isConfirmed}
                            onChange={()=>setIsConfirmed(!isConfirmed)}
                            name="isConfirmed"
                            color="primary"
                        />
                    }
                    label="Confirmed"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Update Booking
                </Button>
            </form>
            <ToastContainer />
        </Container>
        </>
    )}

    </>
  )
}

export default AdminUserBookingEdit
