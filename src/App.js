import { Route, Routes } from 'react-router-dom'
// components
import Nav from './components/Nav';
// pages
import Info from './pages/Info';
import SignIn from './pages/SignIn';
import Messages from './pages/Messages';
// css
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='info' element={<Info />} />
        <Route path='messages' element={<Messages />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
