import userEvent from "@testing-library/user-event";
import { NavLink, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
// css
import "./styles.css"

const Nav = ({ user, setUser }) => {

  const navigate = useNavigate();

  // function handleNavClick() {

  // }

  function handleLogOut() {
    navigate('/')
    setUser('')
  }

  return (

    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <NavLink className="olive item" activeClassName="olive item active" to='/'>Home</NavLink>
        <NavLink className="orange item" activeClassName="orange item active" to='/info'>Info</NavLink>
        <NavLink className="blue item" activeClassName="blue item active" to='/messages'>Messages</NavLink>
        <div className="right menu">
          {
            !user
            ?
            <NavLink className="violet item" activeClassName="violet item active" to='/signup'>Sign Up/Log In</NavLink>
            :
            <NavLink className="violet item" to='/' onClick={handleLogOut}>Log-Out</NavLink>
          }
        </div>
      </div>
    </div>

  );
};

export default Nav;
