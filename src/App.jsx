import Dashboard from './components/pages/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Transaction from './components/pages/Transaction'
import User from './components/pages/User'
import Schedule from './components/pages/Schedule'
import Setting from './components/pages/Setting'
import Contact from './components/pages/Contact'
import Help from './components/pages/Help'
import './index.css'

import Login from "./components/pages/Login";
import Signup from './components/pages/signup'
import ProtectedRoute from "./context/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {

  return (
    <>
     <UserAuthContextProvider>
        <BrowserRouter>
      {/* <ProtectedRoute> */}
        <div className='flex'>
           
        {/* <Sidebar/> */}
          <Routes>
          <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          {/* </Sidebar> */}
       
        </div>
        {/* </ProtectedRoute> */}
        </BrowserRouter>
        </UserAuthContextProvider>
    </>
  )
}

export default App
