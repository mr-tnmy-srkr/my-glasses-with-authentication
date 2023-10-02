import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success('user logged in successfully')
        navigate('/home')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
     <div className="flex justify-around">
     <div className="" onClick={() => handleSocialLogin(googleLogin)}>
        <button className="btn btn-sm btn-neutral">Google</button>
      </div>
      <div className="" onClick={() => handleSocialLogin(githubLogin)}>
        <button className="btn btn-sm btn-neutral">Github</button>
      </div>
     </div>
    </>
  );
};

export default SocialLogin;
