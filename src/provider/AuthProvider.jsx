import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

//google login
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider)
}





const authentications = {
  googleLogin,

}


  return (
    <div>
      <AuthContext.Provider value={authentications}>
      {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
