import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";
initFirebaseAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const googleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
         
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        googleSignIn,
        logOut,
        user
    }
}

export default useFirebase;

