import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaSquareXTwitter,
  FaYCombinator,
} from "react-icons/fa6";

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
      <div className="grid grid-cols-5 gap-3">
        <div className="tooltip tooltip-bottom" data-tip="Google">
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className="btn btn-sm btn-neutral"
          >
            <FaGoogle />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Facebook">
          <button
            onClick={() => handleSocialLogin(facebookLogin)}
            className="btn btn-sm btn-neutral"
          >
            <FaFacebook />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Github">
          <button
            onClick={() => handleSocialLogin(githubLogin)}
            className="btn btn-sm btn-neutral"
          >
            <FaGithub />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Twitter">
          <button
            onClick={() => handleSocialLogin(twitterLogin)}
            className="btn btn-sm btn-neutral tooltip tooltip-bottom"
          >
            <FaSquareXTwitter />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Yahoo">
          <button
            onClick={() => handleSocialLogin(yahooLogin)}
            className="btn btn-sm btn-neutral"
          >
            <FaYCombinator />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
