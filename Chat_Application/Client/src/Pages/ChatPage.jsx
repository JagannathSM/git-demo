import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import Header from "../Components/Miscellaneous/Header";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";

function ChatPage() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <>
      <div style={{ width: "100%" }}>
        {user && <Header />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && <ChatBox setFetchAgain={setFetchAgain} fetchAgain={fetchAgain}/>}
        </Box>
      </div>
    </>
  );
}

export default ChatPage;
