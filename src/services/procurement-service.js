/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

const DEFAULT_DELAY = 1000;

const BASE_URL = "http://localhost:9000";

function getItem(id) {
  return axios.get(`${BASE_URL}/purchaseItems/get/${id}`);
}

function searchItem(search = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/purchaseItems/data`, { params: { search } })
        .then((res) => resolve(res.data))
        .catch((err) => {
          reject(err);
        });
    }, DEFAULT_DELAY);
  });
}

function addItem(item) {
  return axios.post(`${BASE_URL}/purchaseItems`, item);
}

function deleteItem(id) {
  return axios.delete(`${BASE_URL}/purchaseItems/delete/${id}`);
}

export default {
  getItem,
  searchItem,
  addItem,
  deleteItem,
};
