import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, Text, Button } from "@chakra-ui/react";

const Chat = () => {
    return (
        <Flex p={3} align={"center"} _hover={{bg: "#3952F5", cursor:"pointer"}}>
                <Avatar src = "" marginEnd={3}/>
                <Text>kurigohan@channeler.com</Text>
            </Flex>
    )
}


export default function Sidebar(){
    return (
        <Flex
            bg ={"#6A4FD6"}
            w ={"300px"}
            borderEnd={"1px solid"} borderColor={"#3952F5"}
            direction={"column"}
        >

            <Flex
            bg = "#CB4A97"
            h = "81px" w = "100%"
            align={"center"}justifyContent={"space-between"}
            borderBottom={"1px solid"} borderColor={"#3952F5"}
            p = "3"
            >
                <Flex align={"center"}>
                <Avatar src ="" marginEnd={3}/>
                <Text>Makise Kurisu</Text>
                </Flex>

                <IconButton size={"sm"} isRound icon={<ArrowLeftIcon />} />

            </Flex>

            <Button m="5" p="4">New Chat</Button>

            <Flex overflowX={"scroll"} direction={"column"} sx={{scrollbarWidth: "none"}} flex={1}>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            <Chat /> 
            
            </Flex>

        </Flex>
    )
}