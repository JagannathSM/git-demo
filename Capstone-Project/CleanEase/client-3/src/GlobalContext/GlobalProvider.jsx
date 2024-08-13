import React, { createContext, useContext, useEffect, useState } from "react";
import setAuthToken from "../../utils/setAuthToken";
import http from "../../utils/http";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mainData, setMainData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [heading, setHeading] = useState("");
  const [bookingData, setBookingData] = useState([]);
  const [userReviews,setUserReviews] = useState([]);
  const [updateUserReviews, setUpdateUserReviews] = useState('');
  const [checkListTask, setCheckListTask] = useState([]);

  // useEffect(() => {
  //   if (token) {
  //     setAuthToken(token);
  //     http
  //       .get("/user/getProfile")
  //       .then((res) => {
  //         setLoginUser(res.data.user);
  //       })
  //       .catch((err) => {
  //         setToken(null);
  //         localStorage.removeItem("token");
  //         setAuthToken(null);
  //       });
  //   }
  // }, [token]);

  let loginUser;
  if(localStorage.token){
      const jwt = localStorage.getItem('token');
      loginUser = jwtDecode(jwt)
      if(Date.now() < loginUser.exp*1000){
        setAuthToken(jwt);
      } else {
        alert("Token Expired Please login again!");
        navigate('/logout');
      }
  }

  const getUserProfile = async () => {
    const { data } = await http.get("/user/getProfile");
    setUser(data.user);
  };

  const updateUserProfile = async (firstname, lastname, email) => {
    await http.put("/user/updateProfile", { firstname, lastname, email });
    getUserProfile();
  };

  const getMainServices = async () => {
    const { data } = await http.get("/data/");
    setMainData(data.data);
  };

  const getSubServices = async (cleanServiceID) => {
    const { data } = await http.get(`/data/${cleanServiceID}`);
    setSubData(data.data);
    setHeading(data.heading);
  };

  const bookservice = async (bookData) => {
    await http.post(`/booking/create/${bookData.cleanSubCategoriesID}`, {
      startDate: bookData.startDate,
      serviceType: bookData.serviceType,
      address: bookData.address,
      uniqueBookingID: bookData.uniqueBookingID,
      username:bookData.username,
    });
  };

  const razorPayBooking = async (amount, uniqueBookingID) => {
    const response = await http.post("/payment/create-order", { amount });

    const order = response.data;

    const options = {
      key: "rzp_test_rH4grrSuPDLyeO", // Replace with your test key ID
      amount: order.amount,
      currency: order.currency,
      name: "CleanEase@Corporation",
      description: "Test Transaction",
      order_id: order.id,
      handler: async function (response) {
        const res = await http.post("/payment/validate", {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });
        if (res.data.success) {
          alert("Payment validated successfully");
          alert("Booking Success");
          const res = await http.put("/booking/payment-update", {
            uniqueBookingID,
          });
          if (res.status == 200) {
            navigate("/user-bookings");
          }
        } else {
          alert("Payment validation failed");
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const getUserBookings = async () => {
    const { data } = await http.get("/booking/get");
    data.Allbookings.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
    setBookingData(data.Allbookings);
  };

  const editUserBooking = async (updatedContent) => {
    const result = await http.put(`/booking/update/${updatedContent.userBookingID}`, {
      date: updatedContent.date,
      address: updatedContent.address,
      status: updatedContent.status,
      serviceType: updatedContent.serviceType,
    });
    if(result.status == 200){
      alert('Booking Updated Successfully')
      navigate('/user-bookings')
    }
  };

  const deleteBooking = async (bookingID) => {
    await http.delete(`/booking/delete/${bookingID}`);
    getUserBookings();
  };

  const createReview = async (_id,userReview) => {
    await http.post(`/booking/review/${_id}`, userReview);
  }

  const getUserReview = async (_id) => {
    const {data} = await http.get(`/booking/review/${_id}`);
    setUserReviews(data.review);
  }

  const deleteUserReview = async (_id, deleteID) => {
    await http.delete(`/booking/review/${_id}/${deleteID}`)
    getUserReview(_id);
  }

  const UpdateReviewFunction = async (_id, reviewID, updatedReview) => {
    await http.put(`/booking/review/${_id}/${reviewID}`,updatedReview);
    getUserReview(_id);
  }


  //CEHCKLIST 
  const getUserChecklist = async ()=>{
     const {data} = await http.get(`/checklist/get`);
     setCheckListTask(data.CheckListdata);
  }

  const addUserCehckList = async(newCheckListData) => {
    await http.post("/checklist/create",newCheckListData);
    getUserChecklist();
  }

  const editUserCheckList = async(_id,updatedChecklist) => {
    await http.put(`/checklist/update/${_id}`,updatedChecklist);
    getUserChecklist();
  }

  const deleteUserCheckList = async(_id)=>{
    await http.delete(`/checklist/delete/${_id}`);
    getUserChecklist();
  }

  return (
    <GlobalContext.Provider
      value={{
        loginUser,
        user,
        updateUserProfile,
        getUserProfile,
        getMainServices,
        mainData,
        getSubServices,
        subData,
        heading,
        razorPayBooking,
        bookservice,
        getUserBookings,
        bookingData,
        deleteBooking,
        editUserBooking,
        createReview,
        getUserReview,
        userReviews,
        deleteUserReview,
        updateUserReviews, 
        setUpdateUserReviews,
        UpdateReviewFunction,
        getUserChecklist,
        checkListTask,
        setCheckListTask,
        addUserCehckList,
        deleteUserCheckList,
        editUserCheckList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
