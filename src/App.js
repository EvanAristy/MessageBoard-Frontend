import { Route, Routes } from 'react-router-dom'
import { useState } from "react"
// components
import Nav from './components/Nav';
// pages
import Home from './pages/Home';
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
        <Nav user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='info' element={<Info />} />
          <Route path='messages' element={<Messages user={user}/>} />
          <Route path='signup' element={<SignIn user={user} setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
