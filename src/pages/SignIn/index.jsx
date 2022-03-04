import React from "react";
// css
import "./styles.css"

const SignIn = () => {
    return (
        <div id="forms">
            <div id="sign-up">
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div className="field">
                        <label>User Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <button className="ui button" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div id="log-in">
                <form className="ui form">
                    <div className="field">
                        <label>User Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <button className="ui button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
