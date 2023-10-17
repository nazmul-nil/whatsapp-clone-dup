import { AppContext } from '../../context/AppContextProvider';
import { useContext } from 'react';
// material icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LeftDrawer = () => {

  const {openDrawer, setOpenDrawer, account} = useContext(AppContext)

  return (
    <div className={`w-full h-full z-50 absolute top-0 ${openDrawer ? 'left-0 ' : 'left-[-500px]'} overflow-y-scroll transition-all duration-300 ease-in-out`}>

      {/* bg green header */}
      <div className="w-full  bg-[#008069] pr-[20px] pl-[23px] pb-[20px]">
        <div className='flex text-white gap-[20px] h-[110px] '> 
           <div className='mt-auto' onClick={() => setOpenDrawer(false)}>
           <ArrowBackIcon style={{marginTop: 'auto', cursor: 'pointer'}} />
           </div>
           <p className='mt-auto text-xl font-medium'>Profile</p>
        </div>
      </div>

      {/* Profile picture */}
      <div className='w-full bg-[#f0f2f5]'>
        <div className='w-full  py-[28px] flex items-center justify-center'>
          <div>
            <img src={account.picture} alt="Photo" className={`w-[200px] h-[200px] rounded-full cursor-pointer ${openDrawer ? 'scale-100' : 'scale-0'} transition-all duration-700  ease-in-out`}/>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-700 ease-in-out ${openDrawer ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} overflow-hidden`}>
        {/* name */}
        <div className='w-full px-[30px] py-[14px] border border-gray-200 shadow-md'>
          <p className='text-[#008069] text-[0.875rem] leading-[1.2] font-normal mb-[14px] '>
            Your name
          </p>
          <p>
            {account.name}
          </p>
        </div>
        <div className='w-full px-[30px] pt-[14px] pb-[20px] bg-[#f0f2f5]'>
          <p className='text-[#667781] text-[0.875rem] leading-[1.4286] font-normal'>
          This is not your username or pin. This name will be visible to your WhatsApp contacts.
          </p>
        </div>

        {/* Description */}
        <div className='w-full px-[30px] py-[14px] border border-gray-200 shadow-md'>
          <p className='text-[#008069] text-[0.875rem] leading-[1.2] font-normal mb-[14px] '>
            About
          </p>
          <p>
            About me
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftDrawer