"use client";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { setUser } from "../redux/slices/userSlice";

// This hook automatically generates refresh Token from API
// Used for Login Persistence after Page Refresh

const useAutoLogin = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        try {
            const response = await axios.get(`/api/refresh`, {withCredentials: true});
        if(response.status === 200){
            const user = {
                id: response.data.user.id,
                name: response.data.user.name,
                username: response.data.user.username,
                email: response.data.user.email,
                role: response.data.user.role,
                auth: response.data.auth,
              };
            dispatch(setUser(user));
        }
        } catch (error) {
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
      })();
    }, []);
    

  return loading;
}

export default useAutoLogin