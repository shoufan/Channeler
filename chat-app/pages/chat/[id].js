import Sidebar from "@/components/Sidebar"
import { Flex, Text } from "@chakra-ui/react"
import { query, collection, orderBy, doc } from "firebase/firestore"
import Head from "next/head"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore"
import { db, auth } from "@/firebaseconfig"
import { useAuthState } from 'react-firebase-hooks/auth';
import getOtherEmail from "@/utils/getOtherEmail"
import Topbar from "../../components/Topbar";
import Bottombar from "../../components/Bottombar";
import { useEffect, useRef } from "react"

export default function Chat () {
    const router = useRouter();
    const { id } = router.query;
    const [user] = useAuthState(auth);
    const q = query(collection(db, "chats", id, "messages"), orderBy("timestamp"));
    const [messages] = useCollectionData(q);
    const[chat] = useDocumentData(doc(db, "chats", id));
    const bottomOfChat = useRef();

    const getMessages = () =>
        messages?.map(msg => {
            const sender = msg.sender === user.email;

            return (
                <Flex key={Math.random()} alignSelf={sender ? "flex-end" : "flex-start"} bg={sender ? "blue.100" : "green.100"} w={"fit-content"} minWidth={"100px"} borderRadius={"lg"} p={3} m={1}>
                     <Text>{msg.text}</Text>
                </Flex>
            )
        })

    useEffect(() => {
        if (bottomOfChat.current) {
            setTimeout(() => {
                bottomOfChat.current.scrollIntoView({
                    behavior: "smooth",
                    block: 'start',
                });
            }, 100);
        }
    }, [messages]);

    return (
        <Flex
        h = {"100vh"}>

            <Head>
                <title>Channeler</title>
            </Head>

            <Sidebar />

            <Flex
            flex={1}
            direction={"column"}>
                <Topbar email={getOtherEmail(chat?.users, user)}/>

                <Flex flex={1} direction={"column"} pt={4} mx={5} overflowX={"scroll"} sx={{scrollbarWidth: "none"}}>
                    
                    {getMessages()}
                    <div ref={bottomOfChat}></div>
                    
                </Flex>

                <Bottombar id={id} user={user}/>

            </Flex>
        </Flex>
    )
}