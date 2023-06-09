import { createContext, useEffect, useState, useContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup, 
    GithubAuthProvider,
    sendPasswordResetEmail,
} from "firebase/auth"
import { auth } from "../firebase";

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState()

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        return signOut(auth)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }
    function githubSignIn() {
        const githubAuthProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubAuthProvider)
    }
    function sendPasswordReset(email) {
        return sendPasswordResetEmail(auth, email)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, githubSignIn, sendPasswordReset}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}