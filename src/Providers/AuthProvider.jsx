import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import app from "../FireBase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setuser] = useState(null)
    const [loading , setloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    


    const createUser = (email , password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }



    const signIn = (email , passsword)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email , passsword);
    }

    const googlegnIn =()=>{
        setloading(true);
       return signInWithPopup(auth , googleProvider)
    }

    const logOut = () =>{
        setloading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser);
            console.log('current user', currentUser)
            setloading(false)
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        googlegnIn,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;