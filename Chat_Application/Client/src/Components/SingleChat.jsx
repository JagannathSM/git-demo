import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { getSender, getSenderDeatils } from "../Config/ChatLogics";
import ProfileModel from "./Miscellaneous/ProfileModel";
import UpdateGroupChatModel from "./Miscellaneous/UpdateGroupChatModel";
import http from '../../utils/http';
import './Styles.css'
import ScrollableChat from "./ScrollableChat";
import io from 'socket.io-client';
import Lottie from "react-lottie";
import TypingAnimation from '../Animation/Typing.json';

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat, notification, setNotification } = ChatState();
  const toast = useToast();

  const [ messages, setMessages ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ newMessage, setNewMessage ] = useState();
  const [ socketConnected, setSocketConnected ] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TypingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  const featchMessages = async () => {
    if(!selectedChat) return;
    try {
      setLoading(true);
      const {data} = await http.get(`/message/${selectedChat._id}`);
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);

    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
    }
  };


  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);


  useEffect(() => {
    featchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if(!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id){
        // give notification
        if(!notification.includes(newMessageRecieved)){
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      }
      else{
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const sendMessage = async(event) => {
    if(event.key === "Enter" && newMessage) {

      socket.emit("stop typing", selectedChat._id);

      try {
        setNewMessage("");
        const {data} = await http.post("/message/",{
          content: newMessage,
          chatId: selectedChat._id,
        });

        socket.emit("new message", data);

        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });

      }
    }
  }

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    // typing indicator
    if(!socketConnected) return;
    if(!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(()=>{
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if(timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength)
  }

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "15px", md: "20px" }}
            fontFamily="Work sans"
            fontWeight="bold"
            pb={3}
            px={2}
            w="100%"
            display={"flex"}
            justifyContent={{ base: "space-between" }}
            alignItems={"center"}
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              marginRight={2}
              icon={<HamburgerIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(selectedChat.users, user)}
                <ProfileModel
                  user={getSenderDeatils(selectedChat.users, user)}
                />
              </>
            ) : (
              <>{selectedChat.chatName.toUpperCase()}
              <UpdateGroupChatModel setFetchAgain={setFetchAgain} fetchAgain={fetchAgain} featchMessages={featchMessages}/>
              </>
            )}
          </Text>

          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"flex-end"}
            p={3}
            bg={"#E8E8E8"}
            w={"100%"}
            h={"100%"}
            borderRadius={"lg"}
            overflowY={"hidden"}
          >
            {loading ? (
              <Spinner size="xl" w={20} h={20} alignSelf={"center"} margin={"auto"} />
            ) : (
              <>
              <div className="messages">
                <ScrollableChat messages={messages} />
                </div>
              </>
            )}

            <FormControl onKeyDown={sendMessage} isRequired mt={3}>
              {isTyping ? <div>
                <Lottie options={defaultOptions} width={70} style={{ marginBottom: 15, marginLeft: 0 }} />
              </div> : <></>}
              <Input variant="filled" bg={"#E0E0E0"} color={"black"} placeholder="Type a message here..." onChange={typingHandler} value={newMessage} />
            </FormControl>

          </Box>
        </>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
