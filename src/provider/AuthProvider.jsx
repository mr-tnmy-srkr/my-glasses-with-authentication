import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//sign in
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

  const authentications = {
    googleLogin,
    createUser,
    login
  };

  return (
    <div>
      <AuthContext.Provider value={authentications}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
