import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./BookingPage.css";
import { bookingSchema } from "../../Schema/Schema";
import { useFormik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function BookingPage() {
  const navigate = useNavigate();
  const { cleanSubCategoriesID } = useParams();
  const { subData, razorPayBooking, bookservice, loginUser } = useGlobal();

  const [serviceName, setServiceName] = useState("");
  const [serviceAmount, setServiceAmount] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceType, setServiceType] = useState("one-time");
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: { houseNo: "", streetName: "", district: "", landmark: "" },
    validationSchema: bookingSchema,
    onSubmit: (values) => {
      handleBookingSubmit(values);
    },
  });

  useEffect(() => {
    const bookingData = subData.filter(
      (ele) => ele._id == cleanSubCategoriesID
    );
    setServiceName(bookingData[0].subServiceName);
    setServiceAmount(bookingData[0].serviceAmount);
  }, []);

  const handleBookingSubmit = async (values) => {
    const bookingDate = `${date}T${time}`;
    const stringDate = new Date(bookingDate).toString();
    const startDate = Date.parse(stringDate);
    const address = `${values.houseNo}, ${values.streetName}, ${values.district}, ${values.landmark}`;
    const uniqueBookingID = Math.random().toString(36).slice(-8);

    const bookData = {
      username:`${loginUser.firstname}, ${loginUser.lastname}`,
      address,
      serviceType,
      startDate,
      cleanSubCategoriesID,
      uniqueBookingID,
    };
    console.log(bookData);

    if (startDate < Date.now()) {
      setError("Cant book on past date");
    } else if (startDate < Date.now() + 3600000) {
      setError("Cant able to book services with-in 1hr");
    } else {
      try {
        const amount = parseInt(serviceAmount);
        await bookservice(bookData);
        await razorPayBooking(amount, uniqueBookingID);
      } catch (err) {
        if (err.response.status == 400) {
          setError(err.response.data);
        } else {
          setError(err.message);
        }
      }
    }
  };

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: 3,
          mt: 5,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Button sx={{mt: 2, mb: 2,color: "#333", backgroundColor: "#fff"  }} startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>

        <Typography variant="h4" gutterBottom>
          Book a Service
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Service Name"
                value={serviceName}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Service Charges"
                value={serviceAmount}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="House No."
                // value={addressData.houseNo}
                name="houseNo"
                // onChange={handleChange}
                required
                value={formik.values.houseNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.houseNo && formik.errors.houseNo
                  ? formik.errors.houseNo
                  : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Street"
                // value={addressData.streetName}
                name="streetName"
                // onChange={handleChange}
                required
                value={formik.values.streetName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.streetName && formik.errors.streetName
                  ? formik.errors.streetName
                  : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="District"
                // value={addressData.district}
                name="district"
                // onChange={handleChange}
                required
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.district && formik.errors.district
                  ? formik.errors.district
                  : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Landmark"
                // value={addressData.landmark}
                name="landmark"
                // onChange={handleChange}
                value={formik.values.landmark}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.landmark && formik.errors.landmark
                  ? formik.errors.landmark
                  : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="service-type-label">Service Type</InputLabel>
                <Select
                  labelId="service-type-label"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  label="Service Type"
                  required
                >
                  <MenuItem value="one-time">One Time</MenuItem>
                  <MenuItem value="recurring">Recurring</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="Date_lab" htmlFor="Date">
                Date
              </label>
              <div className="Date">
                <input
                  id="Date"
                  type="date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="Time_lab" htmlFor="Time">
                Time
              </label>
              <div className="Time">
                <input
                  id="Time"
                  type="time"
                  required
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              {error && (
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#d32f2f", textAlign: "center" }}
                >
                  {error}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default BookingPage;
