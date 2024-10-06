import { SettingsIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider'
import UserBadgeCompo from '../UserAvatar/UserBadgeCompo'
import http from '../../../utils/http';
import UserListItem from '../UserAvatar/UserListItem'

const UpdateGroupChatModel = ({fetchAgain, setFetchAgain, featchMessages}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, selectedChat, setSelectedChat} = ChatState()
    const toast = useToast()

    const [groupChatName, setGroupChatName] = useState('')
    const [search, setSearch] = useState()
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [renameLoading, setRenameLoading] = useState(false)

    const handleLeaveGroup = async() => {
        try {
            setLoading(true)
            const {data} = await http.put(`/chat/groupremove`,{
                chatId:selectedChat._id,
                userId:user._id
            })

            setSelectedChat(null)
            featchMessages();
            setFetchAgain(!fetchAgain)
            setLoading(false)
        } catch (error) {
            toast({
                title:"Error Occured!",
                description:"Failed to remove user",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"top-right"
            })
            setLoading(false)
        }

    }

    const handleremoveUser = async (removeUser) => {
        if(selectedChat.groupAdmin._id !== user._id){
            toast({
                title:"Only admins can remove user",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"top-right"
            })
            return
        }

        try {
            setLoading(true)
            const {data} = await http.put(`/chat/groupremove`,{
                chatId:selectedChat._id,
                userId:removeUser._id
            })

            removeUser._id === user._id ? setSelectedChat(null) : setSelectedChat(data)
            featchMessages();
            setFetchAgain(!fetchAgain)
            setLoading(false)
        } catch (error) {
            toast({
                title:"Error Occured!",
                description:"Failed to remove user",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"top-right"
            })
            setLoading(false)
        }
    }

    const handleAddUser = async (userToAdd) => {
        console.log(selectedChat.users)
        if (selectedChat.users.find(u => u._id === userToAdd._id)) {
            toast({
              title: "User already in group",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "top-right",
            });
            return;
          }

        if(selectedChat.groupAdmin._id !== user._id){
            toast({
                title:"Only admins can add user",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"top-right"
            })
            return
        }

        try {
            setLoading(true)
            const {data} = await http.put("/chat/addgroup", {
                chatId:selectedChat._id,
                userId:userToAdd._id
            })
            setSelectedChat(data)
            setFetchAgain(!fetchAgain)
            console.log(data)
            setLoading(false)
        } catch (error) {
            toast({
                title:"Error Occured!",
                description:error.response.data ? error.response.data.message : "Failed to add user",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"top-right"
            })
            setLoading(false);
        }
    }

    const handleRename = async () => {
        setRenameLoading(true)
        if(!groupChatName){
            toast({
                title:"Please fill all the fields",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom"
            })
            setRenameLoading(false);
            return
        }

        try {
            const {data} = await http.put("/chat/rename", {
                chatId:selectedChat._id,
                chatName:groupChatName
            })
            setSelectedChat(data)
            setFetchAgain(!fetchAgain)
            setRenameLoading(false)
        } catch (error) {
            toast({
                title:"Failed to Update the Chat",
                description:error.response.data || error,
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom"
            })
            setRenameLoading(false);
        }
        setGroupChatName("");
    }

    const handleSearch = async (query) => {
        setSearch(query);
        if(!query){
            setSearchResult([]);
            return
        }
        try {
            const {data} = await http.get(`/user?search=${search}`)
            setSearchResult(data)
            setLoading(false)
        } catch (error) {
            toast({
                title:"Error Occured!",
                description:"Failed to Load the search results",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom"
            })
            setLoading(false)
        }
    }


  return (
    <>
      <IconButton display={{base:"flex"}} icon={<SettingsIcon />} onClick={onOpen}/>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          fontSize={"20px"}
          fontFamily="Work sans"
          display="flex"
          justifyContent="center"
          >{selectedChat.chatName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"100%"} display={"flex"} flexWrap={"wrap"} pb={3}>
                {selectedChat.users.map((user)=>(
                    <UserBadgeCompo
                    key={user._id}
                    user={user}
                    handleFunction={()=>handleremoveUser(user)}
                    />
                ))}
            </Box>
            <FormControl display={"flex"} mb={2}>
                <Input 
                placeholder='Chat Name'
                value={groupChatName}
                onChange={(e)=>setGroupChatName(e.target.value)}
                />
                <Button
                variant='solid'
                colorScheme='teal'
                ml={1}
                isLoading={renameLoading}
                onClick={handleRename}
                >
                    Update
                </Button>
            </FormControl>

            <FormControl display={"flex"}>
                <Input
                placeholder='Add User to group'
                mb={1}
                onChange={(e)=>handleSearch(e.target.value)}
                />
            </FormControl>
            {loading ? (
                <Spinner size='lg'/>
            ) : (
                searchResult?.map((user)=>(
                    <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={()=>handleAddUser(user)}
                    />
                ))
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleLeaveGroup}>
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateGroupChatModel
