import React from "react";

const Nav = () => {
  return (

    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <a class="olive item">Home</a>
        <a class="blue item">Messages</a>
        <a class="orange item">Info</a>
        <div className="right menu">
            <a class="violet item active">Sign Up/In</a>
        </div>
      </div>
    </div>

  );
};

export default Nav;
