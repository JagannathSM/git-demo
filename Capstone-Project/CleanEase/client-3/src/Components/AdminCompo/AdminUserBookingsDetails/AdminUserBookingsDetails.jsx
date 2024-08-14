import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Select, MenuItem } from '@mui/material';
import './AdminUserBookingsDetails.css'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobal } from '../../../GlobalContext/GlobalProvider';


const AdminUserBookingsDetails = () => {
  const navigate = useNavigate();
  const {allBookings, getAllUserBookings} = useGlobal();
    const [bookings,setBookings] = useState([]);
    const [adminGetBookingError,setAdminGetBookingError] = useState('')

    useEffect(() => {
        getAllUserBookings();
      }, []);

    useState(()=>{
      if(allBookings.length > 0){
        setBookings(allBookings);
      }
    },[allBookings])


    const formatDateTime = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString();
    };

    useEffect(()=>{
        if(adminGetBookingError){
          toast.error(adminGetBookingError, {
            position: "top-rigth",
            autoClose: 5000, // Automatically close after 5 seconds
            });
        }
      },[adminGetBookingError])

    return (
        <Container maxWidth="lg" sx={{marginBottom:"1rem"}}>
            <Typography variant="h4" component="h2" gutterBottom>
                User Bookings
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor:"lightgray"}}>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Type of Service</TableCell>
                            <TableCell>Service Date</TableCell>
                            <TableCell>Name of Service</TableCell>
                            <TableCell>Is Paid</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Is Confirmed</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking._id}>
                                <TableCell>{booking.username}</TableCell>
                                <TableCell>{booking.serviceType}</TableCell>
                                <TableCell>{formatDateTime(booking.startDate)}</TableCell>
                                <TableCell>{booking.subServiceName}</TableCell>
                                <TableCell>{booking.isAmountPaid ? "Yes": "No"}</TableCell>
                                <TableCell>{booking.status}</TableCell>
                                    
                                <TableCell>{booking.isConfirmed ? "Yes" : "No"}</TableCell>
                                    
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/admin-updatebooking/${booking._id}`)}
                                    >
                                        Update Booking
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ToastContainer />
        </Container>
    );
};

export default AdminUserBookingsDetails;
