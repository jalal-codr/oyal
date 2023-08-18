import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {auth,provider} from '../firebase-config'
import axios from 'axios'
function Signin() {
  const [user, setUser] =useState()
  let [page, setPage] =useState('')
    function click (){
        signInWithPopup(auth,provider)
        .then((response)=>{
            const person = {
                name: response.user.displayName,
                email: response.user.email,
                photo: response.user.photoURL
            }
            const url = "https://periwinkle-betta-hose.cyclic.cloud//post_user"
            axios.post(url,person);
            setUser(person)

        })
    }


    useEffect(()=>{
      if(user){
        setPage('home')
      }
      else if(window.location.pathname=="/about"){
        setPage('about')
      }else if(window.location.pathname=="/home"){
        setPage('home')
      }
    },[user])
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
         <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Join the conversation and meet new people</p>
            <button onClick={click} className="btn btn-primary">Sign in with Google</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin

