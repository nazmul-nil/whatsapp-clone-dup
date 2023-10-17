import { useContext } from "react"
import { timeFormat } from "../timeFunction/timeFormat"
import { AppContext } from "../../context/AppContextProvider"

const Message = ({message}) => {

    const {account} = useContext(AppContext)

  return (
    <>
        {account.sub === message.senderId ? 
            <div className="bg-[#00a884] rounded-[25px] px-4 flex py-2 break-words max-w-[60%] ml-auto my-2 mx-2 w-fit">
                <p className="text-sm font-normal text-black">{message.text}</p>
                <span className="ml-4 text-[10px] mt-auto">
                {timeFormat(message.createdAt)}
                </span>
            </div>
        :
            <div className="bg-[#ffffff] rounded-[25px] px-4 flex py-2 break-words max-w-[60%]  my-2 mx-2 w-fit">
                <p className="text-sm font-normal text-black">{message.text}</p>
                <span className="ml-4 text-[10px] mt-auto">
                    {timeFormat(message.createdAt)}
                </span>
            </div>  
    }
    </>
  )
}

export default Message
