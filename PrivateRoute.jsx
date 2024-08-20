import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { Triangle } from "react-loader-spinner";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {userInfo, loading} = useContext(AuthContext)
  

    if (loading) {
        // return <span className="loading loading-infinity loading-lg"></span>
        return <div className="relative min-h-screen flex justify-center items-center">
            (<Triangle
                visible={true}
                height="80"
                width="80"
                color="#6b34eb"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
        </div>
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to='/authentication'></Navigate>
}

export default PrivateRoute