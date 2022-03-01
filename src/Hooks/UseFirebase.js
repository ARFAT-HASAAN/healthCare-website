import FirebaseInitialiezed from "../Components/firebase/InitialiazedApp";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialiezed();
const UseFiebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const Googleprovider = new GoogleAuthProvider();
  const auth = getAuth();

  // sign with google
  const SignWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, Googleprovider).finally(() =>
      setLoading(false)
    );
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  // create new user
  const NewUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signInWithEmailAndPassword
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update uer profile
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // console.log("my name");
        setUser(auth?.currentUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // log out
  const logout = () => {
    setLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  return {
    isloading,
    SignWithGoogle,
    logout,
    user,
    NewUser,
    signInWithEmail,
    error,
    setUserName,
    setUser,
    setError,
  };
};

export default UseFiebase;
