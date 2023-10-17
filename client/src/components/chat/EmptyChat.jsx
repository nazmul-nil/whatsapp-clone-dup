
const EmptyChat = () => {
  return (
    <div className="w-full bg-[#f0f2f5] h-full">
      <div className="flex items-center justify-center w-full h-[90%]">
        <div className="text-center">
          <img src="images/empty-chat-img-2.png" alt="" className="w-[320px] h-[188px] mx-auto"/>
          <h1 className="mt-[28px] text-[32px] font-light text-[#41525d]">
          Download WhatsApp for Windows
          </h1>
          <p className="mt-[18px] text-[#667781] text-[14px] leading-[20px] ">
          Make calls, share your screen and get a faster experience when you download the Windows app.
          </p>
          <button className='px-[24px] mt-[32px] text-[0.875rem] font-medium leading-[1.1429] mx-auto text-white rounded-[24px] border-[1px] border-solid border-transparent bg-[#008069] hover:bg-[#308a79] transition-colors duration-150 ease-in-out text-sm py-[6px] flex items-center justify-center '>
            Get the app
          </button>
        </div>
      </div>
      <div>
        <p className="text-center text-[#8696a0] text-[14px] leading-[20px]">
        Your personal messages are end-to-end encrypted
        </p>
      </div>
    </div>
  )
}

export default EmptyChat