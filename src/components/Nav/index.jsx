import { Link } from "react-router-dom"

const Nav = () => {
  return (

    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link className="olive item" to='/'>Home</Link>
        <Link className="blue item" to='/messages'>Messages</Link>
        <Link className="orange item" to='/info'>Info</Link>
        <div className="right menu">
            <Link className="violet item active" to='/signin'>Sign Up/Log In</Link>
        </div>
      </div>
    </div>

  );
};

export default Nav;
