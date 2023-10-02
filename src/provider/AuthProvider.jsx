import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);


  //google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };


  //github login
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };



  //norma sign up
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //normal sign in
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
 
//sign out

const logOut = () => {
  signOut(auth).then(() => {
    toast.success('Successfully Signed out!')
  }).catch((error) => {
    console.log(error.message);
  });
}
  //using observer
  /*  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    });
  }, []); */
  // console.log(user);

  //module e jeta ache (mount/unmount concept)
  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // console.log(user);

  const authentications = {
    user,
    loading,
    googleLogin,
    githubLogin,
    createUser,
    login,
    logOut,
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
