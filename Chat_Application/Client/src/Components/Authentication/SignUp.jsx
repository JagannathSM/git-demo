import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import http from "../../../utils/http";

function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  const postDetails = async (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chat_Application_User_Profile");
      data.append("cloud_name", "dt1yxc1al");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dt1yxc1al/image/upload",
          data
        );
        setPic(response.data.url.toString());
      } catch (error) {
        console.error(error);
      } finally {
        setPicLoading(false);
      }
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
    }
  };

  const handleSubmit = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Password Doesn't Match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
      return;
    }

    try {
      const response = await http.post("/user/register", {
        name,
        email,
        password,
        pic,
      });
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    //   localStorage.setItem("userInfo", JSON.stringify(response.data));
      setPicLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: error.response.data.message || "Failed to Create Account",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
    }
  };

  return (
    <>
      <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Your Password"
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmpassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Confirm Your Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={() => {
            handleSubmit();
          }}
          isLoading={picLoading}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}

export default SignUp;

//https://api.cloudinary.com/v1_1/dt1yxc1al/image/upload

//CLOUDINARY_URL=https://api.cloudinary://223671216375965:wdEYp3xtC5GFvZ1hGRdaHl5zOgI@dt1yxc1al

// fetch('https://api.cloudinary.com/v1_1/dmlvzvz8n/image/upload', {
//     method: 'post',
//     body: data
// })
// .then((res) => res.json())
// .then((data) => {
//     setPic(data.url.toString())
//     setPicLoading(false)
// })
// .catch((err) => {
//     console.log(err)
//     setPicLoading(false)
// })
