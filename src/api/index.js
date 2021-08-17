/*
 */
import ajax from "./ajax";
import jsonp from "jsonp";
import { message } from "antd";
const BASE = "";
//login
export const reqLogin = (username, password) =>
  ajax(BASE + "/login", { username, password }, "POST");
export const reqAddUser = (user) =>
  ajax(BASE + "/manager/user/add", user, "POST");

export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://restapi.amap.com/v3/weather/weatherInfo?key=98c97d10c1fda37bdc5402d15c1cdd71&city=${city}`;
    jsonp(url, {}, (err, data) => {
      //console.log("jsonp", err, data);
      if (!err && data.status === "1") {
        const { weather } = data.lives[0];
        resolve(weather);
      } else {
        message.error("failed in acquired the weather info.");
      }
    });
  });
};
reqWeather("上海");
