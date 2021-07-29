import axios from "axios";
import { message } from "antd";
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      //get request
      promise = axios.get(url, {
        //set params
        params: data,
      });
    } else {
      //post request
      promise = axios.post(url, data);
    }
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        message.error("request failed: " + error.message);
      });
  });
}
