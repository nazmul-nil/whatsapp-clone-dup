import LoginDialog from "./account/LoginDialog"
import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"
import ChatDialog from "./chat/ChatDialog"

const Messenger = () => {
  const {account} = useContext(AppContext)
  return (
    <div className="w-full">
      {
        account ? <ChatDialog/> 
        : 
       
        <LoginDialog/>
      }
      

      
    </div>
  )
}

export default Messenger