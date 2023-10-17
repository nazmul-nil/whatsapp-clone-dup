
// Importing material component
import {Dialog} from '@mui/material'
import LeftChatMenu from './LeftChatMenu'
import EmptyChat from './EmptyChat'
import RightChat from './RightChat'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider'

const ChatDialogStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: '1344px',
  overflow: 'hidden',
  height: '98%',
  margin: '0',
  borderRadius: '0px'
}

const ChatDialog = () => {

  const {person} = useContext(AppContext)

  return (
    <div className="w-full">
      {/* header */}
      <div className="w-full h-[125px] bg-[#00a884]">

      </div>

      {/* Chat Dialog */}
      <Dialog 
      open={true} 
      PaperProps={{ sx: ChatDialogStyle}}
      hideBackdrop={true}
      >
        <div className='w-full h-full flex '>
          {/* Left Chat Options menu */}
          <LeftChatMenu/>

          {/* Right Chat or empty chat menu */}
          {Object.keys(person).length ? <RightChat person={person}/> : <EmptyChat/>}
        </div>
      </Dialog>


    </div>
  )
}

export default ChatDialog