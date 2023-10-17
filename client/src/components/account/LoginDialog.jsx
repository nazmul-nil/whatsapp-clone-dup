import {BsWhatsapp} from 'react-icons/bs'
// Importing material component
import {Dialog} from '@mui/material'

// import constants
import { qrCodeImage } from '../../constants/data'

// Google login
import { GoogleLogin } from '@react-oauth/google';

// jwt decode
import jwt_decode from "jwt-decode";

import { useContext } from "react"
import { AppContext } from '../../context/AppContextProvider';

import { addUser } from '../../service/api';




// Dialog styling
const LoginDialogStyle = {
  maxWidth: '100%',
  width: '818px',
  height: '97%',
  overflow: 'hidden',
  maxHeight: '100%',
  marginTop: 20,

}


const LoginDialog = () => {
  const { setAccount} = useContext(AppContext)



  const handleLoginSuccess = async (response) => {
    const decoded = jwt_decode(response.credential)
    setAccount(decoded)
    await addUser(decoded)
  }

  const handleLoginError = (e) => {
    console.log(e)
  }
  return (
    <div className='w-full min-h-[200vh]'>

      {/* Login page header */}
      <div className="w-full h-[222px] bg-[#00a884] ">
        <div className="max-w-[818px] mx-auto py-[28px]">
          <div className="flex items-center gap-[14px]">
            <span>
            <BsWhatsapp className="text-white text-3xl "/>
            </span>
            
            <span className='text-[14px] font-medium uppercase text-white'>
            WhatsApp Web
            </span>
          </div>
        </div>
      </div>

      {/* Login page DIALOG */}
      <Dialog
        open={true}
        PaperProps={{sx: LoginDialogStyle}}
        hideBackdrop={true}
      >
        
        <div className='w-full pt-[40px] pb-[58px] px-[52px]' >

          {/* Download whatsapp div */}
          <div className='px-[40px] w-full py-[20px] flex items-center gap-[24px] border rounded-[6px] border-[#d1d7db]'>

            {/* left  */}
            <div className=''>
              <h3 className='text-[#111b21] mb-[2px] text-[1.0625rem] font-normal leading-[1.2941]'>
              Download WhatsApp for Windows
              </h3>
              <p className='text-[0.875rem] font-normal leading-[1.4286]'>
              Get calling, screen sharing and a faster experience with the new Windows app.
              </p>
            </div>

            {/* Right GET THE APP button */}
              <button className='px-[24px] text-white rounded-[24px] border-[1px] border-solid border-transparent bg-[#008069] hover:bg-[#308a79] transition-colors duration-150 ease-in-out text-sm py-[6px] flex items-center justify-center '>
                Get the app
              </button>
          </div>

          {/* Use whatsapp and qr section */}
          <div className='flex justify-between  mt-[20px]'>
            {/* left section */}
            <div>
              <h2 className='text-[28px] font-[300] leading-normal text-[#41525d] mb-[36px]'>
              Use WhatsApp on your computer
              </h2>
              <ol className=''>
                <li className='text-[16px] leading-[25px] text-[rgb(59,74,84)]'>
                1. Open WhatsApp on your phone
                </li>
                <li className='text-[16px] leading-[25px] text-[rgb(59,74,84)] mt-[18px]'>
                2. Go to settings by tapping on your profile photo, <span className='font-medium leading-[24px] text-gray-700'>Menu</span>, or <span className='font-medium leading-[24px] text-gray-700'>Settings</span>
                 
                </li>
                <li className='text-[16px] leading-[25px] text-[rgb(59,74,84)] mt-[18px]'>
                3. Tap <span className='font-medium leading-[24px] text-gray-700'>Linked devices</span> and then <span className='font-medium leading-[24px] text-gray-700'>Link a device</span>
                </li>
                <li className='text-[16px] leading-[25px] text-[rgb(59,74,84)] mt-[18px]'>
                4. Point your phone to this screen to capture the QR code
                </li>
              </ol>
            </div>

            {/* Right QR code section */}
            <div className='relative'>
              <img src={qrCodeImage} alt="QR code image" className='w-[200px] h-[200px]'/>
              <div className='absolute top-[40%]'>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default LoginDialog