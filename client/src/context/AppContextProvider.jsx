import { createContext, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = ({children}) => {
    const [account, setAccount] = useState()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [users, setUsers] = useState([])
    const [person, setPerson] = useState({})

  return (
    <AppContext.Provider value={{account, setAccount, openDrawer, setOpenDrawer, users, setUsers, person, setPerson}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider