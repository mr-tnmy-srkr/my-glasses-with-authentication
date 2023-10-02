import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin, facebookLogin, githubLogin, twitterLogin, yahooLogin } =
    useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("user logged in successfully");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-sm btn-neutral"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-sm btn-neutral"
        >
          Facebook
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-sm btn-neutral"
        >
          Github
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-sm btn-neutral"
        >
          Twitter
        </button>
        <button
          onClick={() => handleSocialLogin(yahooLogin)}
          className="btn btn-sm btn-neutral"
        >
          Yahoo
        </button>
        
      </div>
    </>
  );
};

export default SocialLogin;
