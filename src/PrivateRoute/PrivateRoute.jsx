import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);

  console.log(loading);
  //we,ve to wait here
  if (loading)
    return (
      <div className="flex justify-center h-40 w-full">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
