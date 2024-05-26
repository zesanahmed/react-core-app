import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";




export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser =( email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth).then(() => setUser(null));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
                console.log(currentUser);
            }
            else{
                setLoading(false);
            }
        });
        return () => {
            return unSubscribe();
        }
    },[])


    const authInfo = {user,googleLogin, createUser, signIn, logOut, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;