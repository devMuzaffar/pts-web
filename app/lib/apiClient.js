import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//
// Authentication
//

// Login
export const login = async (data) => {
  let response;
  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }
  return response;
};

// Register New User
export const register = async (data) => {
  let response;
  try {
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }
  return response;
};

// Logout
export const signout = async () => {
  let response;
  try {
    response = await api.post("/logout");
  } catch (error) {
    return error;
  }
  return response;
};

// Update Password
export const updatePassword = async (data) => {
  let response;
  try {
    response = await api.post("/update-password", data);
  } catch (error) {
    return error;
  }
  return response;
};

// Update Profile Details
export const update = async (data) => {
  let response;
  try {
    response = await api.put("/update", data);
  } catch (error) {
    return error;
  }
  return response;
};

// Update Profile Picture
export const updatePicture = async (data) => {
  let response;
  try {
    response = await api.put("/update-pic", data);
  } catch (error) {
    return error;
  }
  return response;
};


//
// Auto Token Refresh
//

// /protected-resource -> 401
// /refresh -> Authenticated State
// /protected-resource

// This method Auto Refreshes Refresh Token when access Token is expired
// handles errors too

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalReq = error.config;
    const status = error.response.status;

    if (
      (status === 401 || status === 500) &&
      originalReq &&
      !originalReq._isRetry
    ) {
      originalReq._isRetry = true;

      try {
        await axios.get(`${URL}/refresh`, { withCredentials: true });
        return api.request(originalReq);
      } catch (error) {
        // return error;
        return Promise.reject(err);
      }
    }
    // 
    return Promise.reject(error);
  }
);