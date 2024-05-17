import Head from "next/head";
import {ChatIcon} from "@chakra-ui/icons"
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login(){
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <>
            <Head>
            <title>Yokosou!</title>
            </Head>

            <Center
            height={"100vh"}>
                <Stack
                align={"center"}
                bgColor={"#6A4FD6"}
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

                    <Button boxShadow={"md"} bgColor={"#FC4778"} textColor={"white"} onClick={() => signInWithGoogle("", {prompt: "select_account"})}>Sign in with Google</Button>
                </Stack>
            </Center>

        </>
        
    )
}