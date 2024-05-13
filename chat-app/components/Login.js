import Head from "next/head";
import {ChatIcon} from "@chakra-ui/icons"
import { Box, Button, Center, Stack } from "@chakra-ui/react";

export default function Login(){
    return (
        <>
            <Head>
            <title>Yokosou!</title>
            </Head>

            <Center
            height={"100vh"}>
                <Stack
                align={"center"}
                bgColor={"white"}
                p={16}
                rounded={"3xl"}
                spacing={12}
                boxShadow={"lg"}>
                    <Box
                    bgColor={"#FC4778"}
                    width={"fit-content"}
                    padding={5}
                    rounded={"3xl"}
                    boxShadow={"md"}>
                        <ChatIcon w = "100px" h = "100px" color = "#3952F5"/>
                    </Box>

                    <Button boxShadow={"md"} bgColor={"#FC4778"} textColor={"white"}>Sign in with Google</Button>
                </Stack>
            </Center>

        </>
        
    )
}