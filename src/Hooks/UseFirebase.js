import FirebaseInitialiezed from "../Components/firebase/InitialiazedApp"

import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";



FirebaseInitialiezed()
const UseFiebase = () => {

    const [user, setUser] = useState({})
    const [isloading, setLoading] = useState(true)
    const [email, setemail] = useState('')
    const [password, setPasswrd] = useState('')
    const [name, setName] = useState('')

    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();


    const SignWithGoogle = () => {
        setLoading(true)

        return signInWithPopup(auth, Googleprovider)

            .finally(() => setLoading(false))
    }


    useEffect(() => {
        const auth = getAuth();
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})

            }
            setLoading(false)
        })




        return () => unsubscribed;
    },


        [])


    // get email 
    const getEmail = (e) => {
        setemail(e.target?.value)

    }

    // get pss 
    const getPass = (e) => {
        setPasswrd(e?.target?.value)
    }

    // get name 
    const getName = (e) => {
        setName(e?.target?.value)
    }


    // create new user 
    const NewUser = e => {
        e.preventDefault();

        return createUserWithEmailAndPassword(auth, email, password)

    }

    //signInWithEmailAndPassword
    const signInWithEmail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
            })

    };
    const logout = () => {
        setLoading(true)
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }



    return {
        isloading,
        SignWithGoogle,
        logout,
        user,
        getEmail,
        getPass,
        getName,
        NewUser,
        signInWithEmailAndPassword



    }

}

export default UseFiebase;