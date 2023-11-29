import React, { useState } from 'react'
import './sign.css'
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';
function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
            if (user) {
              alert("Account Created successfull")
            }


        } catch (error) {
            alert(error)
        }
    }



    return (
        <>
            <div className='main_container'>
                <div className='header'>
                    <h2>signup</h2>
                </div>
                <div className="box">
                    <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type='text' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <p>Already have a Account<Link to="/login">Login NOW </Link></p>
                <button onClick={submit} >SIGN up</button>
            </div>
        </>
    )
}
export default Signup;