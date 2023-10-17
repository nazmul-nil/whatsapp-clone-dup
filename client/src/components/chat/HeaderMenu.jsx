
import { AppContext } from "../../context/AppContextProvider"
import { useContext, useState } from "react"
// material icon
import GroupsIcon from '@mui/icons-material/Groups';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

// material component
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const HeaderMenu = ({setText}) => {
const {account,setAccount, setOpenDrawer} = useContext(AppContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full ">
        <div className="h-[59px] px-[16px] bg-[#f0f2f5] flex items-center justify-between">
            <img src={account.picture} alt="photo" className="cursor-pointer w-[40px] h-[40px] rounded-full" onClick={() => setOpenDrawer(true)}/>
            
            {/* menu div */}
            <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center cursor-pointer">
                    <GroupsIcon style={{color: '#54656f', fontSize: '28px'}}/>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center cursor-pointer">
                    <MotionPhotosAutoIcon style={{color: '#54656f', fontSize: '28px'}}/>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center cursor-pointer">
                    <AddCommentIcon style={{color: '#54656f', fontSize: '28px'}}/>
                </div>
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

        {/* search div */}
        <div className="w-full h-[49px] px-[12px] flex items-center justify-around border-b-[1px] border-b-gray-200"> 
        {/* search input */}
            <div className="h-[35px] w-[85%] bg-[#f0f2f5] rounded-[8px] pr-[25px] pl-[20px] flex items-center ">
                <SearchIcon style={{color: '#54656f', fontSize: '23px'}}/>
                <input type="search" name="" id="" className="ml-[35px] bg-transparent px-0 placeholder:text-sm border-none focus:outline-none focus:ring-0" placeholder="Search or start new chat" onChange={(e) => setText(e.target.value)}/>
            </div>

            {/* Filter list */}
            <div className="cursor-pointer flex items-center justify-center">
            <FilterListIcon style={{color: '#54656f', fontSize: '28px'}}/>
            </div>
        </div>
    </div>
  )
}

export default HeaderMenu