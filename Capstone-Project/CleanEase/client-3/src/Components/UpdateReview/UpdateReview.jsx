import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Rating,
  Grid,
  Paper,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";

function UpdateReview() {
    const navigate = useNavigate();
    const {_id} = useParams();
    const {updateUserReviews, UpdateReviewFunction} = useGlobal();
    const [addUpdateReviewError,setAddUpdateReviewError] = useState('');

    const [username, setUsername] = useState(updateUserReviews.username);
    const [text, setText] = useState(updateUserReviews.text);
    const [rating, setRating] = useState(updateUserReviews.rating);
    
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!username || !rating ){
           return setAddUpdateReviewError("Required Fields User Name, Rating")
        }
        try{
            const reviewID = updateUserReviews._id;
            const updatedReview = {
                username,
                text,
                rating
            }
            await UpdateReviewFunction(_id,reviewID,updatedReview)
            setSubmitted(true);
    
            setUsername('');
            setText("");
            setRating(0);
        
            setTimeout(() => {
                setSubmitted(false);
                navigate(-1);
            }, 4000);
    
        } catch (err){
            if (err.message == "Network Error") {
                setAddReviewError("Connection timeout! / DB not responding");
              } else if (err.response.status == 400) {
                setAddReviewError(err.response.data);
              } else {
                setAddReviewError(err.message);
              }    
        }
      };

  return (
    <>
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Update Review
          </Typography>
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Succesfully Updated your review!
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Review"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Typography component="legend">Rating</Typography>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  size="large"
                  sx={{ ml: 2 }}
                />
                {addUpdateReviewError && (
                    <Typography
                        variant="subtitle2"
                        sx={{ color: "#d32f2f", textAlign: "center" }}
                    >
                        {addUpdateReviewError}
                    </Typography>
                )}

              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Update Review
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default UpdateReview;
