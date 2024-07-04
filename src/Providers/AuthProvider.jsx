import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'


export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)

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
        logOut
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}
