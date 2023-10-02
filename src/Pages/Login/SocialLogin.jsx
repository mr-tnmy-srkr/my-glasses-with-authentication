import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
