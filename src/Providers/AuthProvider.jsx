import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'


export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : name, photoURL : photo
        });
    }

    const logOut = () => {
        return signOut(auth);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);
                console.log(currentUser)
            }else{
                console.log('Already logged out')
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const authObject = {
        user,
        setUser,
        createUser,
        updateUser,
        logOut,
        login,
        googleLogin
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}
