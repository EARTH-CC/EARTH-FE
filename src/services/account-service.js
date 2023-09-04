/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

const BASE_URL = "http://localhost:9000";

function isBackendAvailable() {
  return axios
    .get(`${BASE_URL}/ping`)
    .then(() => true) // If the request succeeds, the backend is available
    .catch(() => false); // If the request fails, the backend is not available
}

function authenticate(account) {
  return isBackendAvailable().then((backendAvailable) => {
    if (backendAvailable) {
      // If the backend is available
      return axios
        .post(`${BASE_URL}/login`, account, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => res.data)
        .catch((error) => {
          console.error("Backend request error:", error);
          throw error;
        });
    }
    // If the backend is not available, simulate a successful login using static credentials
    const staticAccount = {
      valid: true,
      message: "Login successful",
      data: {
        uuid: 1,
        username: "eg",
        password:
          "$2b$10$6Hq/7njiVUixrRytZmj.XuPsGqxvet.dAVhdYyIQsLINk/GuZBgee",
        firstname: "Mark",
        lastname: "Salem",
        role: "superadmin",
        refresh_token: "YOUR_STATIC_REFRESH_TOKEN",
        status: 1,
        accessToken: "YOUR_STATIC_ACCESS_TOKEN",
      },
    };

    return Promise.resolve(staticAccount); // Resolve the promise with static data
  });
}

// function authenticate(account) {
//   return axios
//     .post(`${BASE_URL}/login`, account, {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     })
//     .then((res) => res.data);
// }

function logout(account) {
  return axios
    .post(`${BASE_URL}/logout`, account, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then((res) => res.data);
}

function useRefreshToken() {
  return axios.get(`${BASE_URL}/refresh`, {
    withCredentials: true,
  });
}

function getAllUsers() {
  return axios.get(`${BASE_URL}/users`);
}

function getUser(id) {
  return axios.get(`${BASE_URL}/login/getAccount/${id}`);
}

function searchUsers(search = "") {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/users/data`, { params: { search } })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(err);
      });
  });
}

function register(account) {
  return axios.post(`${BASE_URL}/register`, account);
}

function updateUser(id, account) {
  return axios.put(`${BASE_URL}/user/${id}`, account);
}

export default {
  authenticate,
  logout,
  useRefreshToken,
  getAllUsers,
  getUser,
  searchUsers,
  register,
  updateUser,
};
