import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const FirebaseInitialiezed = () => {

    return initializeApp(firebaseConfig);
}

export default FirebaseInitialiezed;