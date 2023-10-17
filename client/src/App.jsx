import './App.css'

// importing from react router dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import Messenger from './components/Messenger'

// google login
import { GoogleOAuthProvider } from '@react-oauth/google';

import AppContextProvider from './context/AppContextProvider';



function App() {
  const clientId = '36215663495-1ksmba35tl1a03tcteaamgr20a2sv057.apps.googleusercontent.com'

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AppContextProvider>
            <Router>
              <Routes>
                <Route path='/' element={<Messenger/>}/>
              </Routes>
            </Router>
        </AppContextProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
