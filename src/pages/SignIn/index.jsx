import { useEffect, useState } from 'react'
import axios from "axios";
import React from "react";
// css
import "./styles.css"

const SignIn = ({ user, setUser }) => {

    const [accounts, setAccounts] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickName, setNickName] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allusers')

            // console.log(response)
            setAccounts(response.data)

        } catch(err) {
            console.log(err)
        }
    }

    const signUp = async (e) => {

        e.preventDefault()
        const newAccount = {
            firstname: firstName,
            lastname: lastName,
            nickname: nickName
        }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/adduser', newAccount)

            if(response.status === 200) {
                setFirstName('')
                setLastName('')
                setNickName('')
            }

            fetchUsers()
        } catch(err) {
            console.log(err)
        }
    }

    const logIn = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/allusers/${userName}`)

            setUser(response.data[0].nickname)
            // console.log(user)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div id="forms">
            <div id="sign-up">
                <form className="ui form" onSubmit={signUp}>
                    <div className="field">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            name="first-name" 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            name="last-name" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>User Name</label>
                        <input 
                            type="text" 
                            name="user-name" 
                            placeholder="User Name" 
                            value={nickName}
                            onChange={e => setNickName(e.target.value)}
                        />
                    </div>
                    <button className="ui button" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>

            <div id="log-in">
                <form className="ui form" onSubmit={logIn}>
                    <div className="field">
                        <label>User Name</label>
                        <input 
                            type="text" 
                            name="user-name" 
                            placeholder="User Name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)} 
                        />
                    </div>
                    <button className="ui button" type="submit">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
