import axios from "axios";


const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL: "https://minifull-stack-store.vercel.app",
        headers: {
          "Content-Type": "application/json",
        },
      });

  return axiosPublic
}

export default useAxiosPublic;