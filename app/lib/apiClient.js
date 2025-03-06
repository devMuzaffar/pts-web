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

export const login = async (data) => {
  let response;
  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }
  return response;
};

export const register = async (data) => {
  let response;
  try {
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }
  return response;
};

export const signout = async () => {
  let response;
  try {
    response = await api.post("/logout");
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

// api.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalReq = error.config;
//     const status = error.response.status;

//     if (
//       (status === 401 || status === 500) &&
//       originalReq &&
//       !originalReq._isRetry
//     ) {
//       originalReq._isRetry = true;

//       try {
//         await axios.get(`${URL}/refresh`, { withCredentials: true });
//         return api.request(originalReq);
//       } catch (error) {
//         return error;
//       }
//     }
//   }
// );