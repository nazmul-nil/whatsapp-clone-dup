import { useEffect } from "react"
import { getUsers } from "../../service/Api"

import { AppContext } from "../../context/AppContextProvider"
import { useContext } from "react"
import EachPerson from "./EachPerson"


const ChatList = ({text}) => {
  

  const { account, users, setUsers} = useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers()
      const filteredData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()))
      setUsers(filteredData)
    }
    fetchData()
  }, [text])

  return (
    <div>
      {users.map((user) => 

        user.sub !== account.sub &&
        <EachPerson key={user.sub} user={user}/>
      )}
    </div>
  )
}

export default ChatList