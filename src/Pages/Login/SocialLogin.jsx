import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {

const {googleLogin} = useContext(AuthContext)

const handleSocialLogin = (media) => {
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}


    return (
        <>
            <div className="divider">continue with</div>
            <div className="" onClick={()=>handleSocialLogin(googleLogin)}>
                <button className="btn btn-sm btn-neutral">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;