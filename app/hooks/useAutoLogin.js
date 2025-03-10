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
                whatsappNumber: response.data.user.whatsappNumber,
                phoneNumber: response.data.user.phoneNumber,
                gender: response.data.user.gender,
                dob: response.data.user.dob,
                address: response.data.user.address,
                country: response.data.user.country,
                city: response.data.user.city,
                lastInstitute: response.data.user.lastInstitute,
                degrees: response.data.user.degrees,
                profile: response.data.user.profile,
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