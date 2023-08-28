/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

// const DEFAULT_DELAY = 1000;

const BASE_URL = "http://localhost:9000";

function getAPI(id, moduleName) {
  return axios.get(`${BASE_URL}/${moduleName}/get/${id}`);
}

function getAllAPI(moduleName) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/${moduleName}/get`)
      .then((res) => resolve(res.data.data))
      .catch((err) => {
        reject(err);
      });
  });
}

function addAPI(data, moduleName) {
  return axios.post(`${BASE_URL}/${moduleName}`, data);
}

function deleteAPI(id, moduleName) {
  return axios.delete(`${BASE_URL}/${moduleName}/delete/${id}`);
}

export default {
  getAPI,
  getAllAPI,
  addAPI,
  deleteAPI,
};
