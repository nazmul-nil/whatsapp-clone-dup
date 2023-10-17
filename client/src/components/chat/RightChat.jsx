
import { defaultProfilePicture } from "../../constants/data"

// Material icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
// import SendIcon from '@mui/icons-material/Send';


// material component
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { getConversation, getMessages, newMessage } from "../../service/Api";
import Message from "./Message";

const RightChat = () => {

  
  const [textValue, setTextvalue] = useState('')
  const [conversation, setConversation] = useState({})

  const [messages, setMessages] = useState([])

  const [messageSent, setMessageSent] = useState(false)

  const {account, setAccount, person} = useContext(AppContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendText = async (e) => {
    const code = e.keyCode || e.which
    if(code === 13) {
      let message = {
        senderId: account.sub,
        recieverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: textValue
      }

      await newMessage(message)
      setTextvalue('')
      setMessageSent(prev => !prev)
    }
  }

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conversation._id)
      setMessages(data)
    }
    conversation._id && getMessageDetails()
  }, [person._id, conversation._id, messageSent])

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({ senderId: account.sub, recieverId: person.sub})
      setConversation(data)
    }
    getConversationDetails()
  },[person.sub])

  return (
    <div className="w-full  h-full">
      <div className="h-[59px] px-[16px] bg-[#f0f2f5] w-full flex items-center justify-between">
        {/* image and name div */}
        <div className="flex items-center gap-[10px] ">
          <img src={person.picture} alt="" className="rounded-[50%] w-[49px] h-[49px]"/>
          
          <div className='ml-2'>
            <p >
              {person.name}
            </p>
            <p className="text-[#54656f] text-sm font-normal">
              Offline
            </p>
          </div>
        </div>

        {/* Search and more icon div */}
        <div className="flex items-center">

          <SearchIcon style={{color: '#54656f', cursor: 'pointer'}}/>

          <div className="w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center cursor-pointer">
            <MoreVertIcon style={{color: '#54656f', fontSize: '28px'}} onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                style={{
                    width: '400px'
                }}
            >
                <MenuItem onClick={handleClose}>New group</MenuItem>
                <MenuItem onClick={handleClose}>New community</MenuItem>
                <MenuItem onClick={handleClose}>Starred messages</MenuItem>
                <MenuItem onClick={handleClose}>Select chats</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    setAccount(null);
                } }>Log out</MenuItem>
                <div className="w-full h-[0.5px] bg-gray-300"></div>
                <MenuItem onClick={handleClose}>Get Whatsapp for Windows</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Messages section */}
      <div className={`w-full h-[80vh] right-chat-bg py-2 overflow-scroll`}>
        {messages && messages.map(message => 
          <Message message={message} key={message._id}/>
          )}
      </div>

      {/* Footer or chat edit and send section */}
      <div className="w-full h-[50.5px] bg-[#f0f2f5] px-[16px] py-[5px] flex items-center gap-[10px]">
            <EmojiEmotionsOutlinedIcon style={{color: '#54656f', cursor: 'pointer'}}/>             
            <AddIcon style={{color: '#54656f', cursor: 'pointer'}}/> 
            {/* Writing messages input box */}
            <input type="text" className="w-[100%] px-4 py-2 rounded-md focus:outline-none" placeholder="Type a message" onChange={(e) => setTextvalue(e.target.value)}
              onKeyPress={(e) => sendText(e)}
              value={textValue}
            />
            <MicIcon style={{color: '#54656f', cursor: 'pointer'}}/> 
            {/* <SendIcon style={{color: '#54656f', cursor: 'pointer'}}/>  */}
      </div>
    </div>
  )
}

export default RightChat