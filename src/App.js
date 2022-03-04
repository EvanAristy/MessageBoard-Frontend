import { Route, Routes } from 'react-router-dom'
import { useState } from "react"
// components
import Nav from './components/Nav';
// pages
import Info from './pages/Info';
import SignIn from './pages/SignIn';
import Messages from './pages/Messages';
// contexts
import UserContext from './contexts/UserContext' 
// css
import './App.css';

function App() {

  const [user, setUser] = useState('')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path='info' element={<Info />} />
          <Route path='messages' element={<Messages user={user}/>} />
          <Route path='signin' element={<SignIn setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
