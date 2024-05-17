import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login.js"
import Sidebar from "../components/Sidebar.js"


export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}

