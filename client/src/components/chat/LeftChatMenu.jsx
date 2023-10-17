import { useState } from "react";
import ChatList from "./ChatList";
import HeaderMenu from "./HeaderMenu"
import LeftDrawer from "./LeftDrawer";


const LeftChatMenu = () => {

  const [text, setText] = useState('')
  return (
    <div className="w-[480px] h-full border-r-[1px] border-r-gray-200 relative">
        {/* header menu div */}
        <HeaderMenu setText={setText}/>

        {/* LEft drawer */}
        <LeftDrawer/>

        {/* Chat lists */}
        <ChatList text={text}/>
    </div>
  )
}

export default LeftChatMenu