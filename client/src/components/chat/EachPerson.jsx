import { useContext } from "react"
import { AppContext } from "../../context/AppContextProvider"

import { setConversation } from "../../service/Api"

const EachPerson = ({user}) => {
  const {setPerson, account } = useContext(AppContext)
  const getUser = async () => {
    setPerson(user)

    await setConversation({ senderId: account.sub, recieverId: user.sub })
  }
  return (
    <div className="flex items-center cursor-pointer h-[72px] hover:bg-gray-300 transition-colors duration-500 ease-in-out py-[10px]" onClick={getUser}>
        <img src={user.picture} alt="" className="rounded-[50%] w-[49px] h-[49px]"/>

        <div className=" w-full h-full px-2">
          <div className="flex justify-between">
            <h3 className="ml-2">
              {user.name}
            </h3>

            {/* Real time */}
            <span>
              5:34pm
            </span>
          </div>
          <p className="ml-2">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
    </div>
  )
}

export default EachPerson