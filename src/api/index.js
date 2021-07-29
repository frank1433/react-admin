/*
 */
import ajax from "./ajax";
const BASE = "";
//login
export const reqLogin = (username, password) =>
  ajax(BASE + "/login", { username, password }, "POST");
export const reqAddUser = (user) =>
  ajax(BASE + "/manager/user/add", user, "POST");
