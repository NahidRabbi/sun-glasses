import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider();

const FirebaseProviders = ({children}) => {
    const [user, setUser] = useState(null)
    
   

    // create user 
    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password);
    };

// sign in user
const signInUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password); 
};
   
// google login
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider)
}

// observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } 
      });
},[])



    const allValues = {
        createUser, 
        signInUser,
        googleLogin
    }
   return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProviders;