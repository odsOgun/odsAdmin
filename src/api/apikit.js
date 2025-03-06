import axios from "axios";

export const authKit = axios.create({
  // baseURL: "https://hack-d-jobs-z4id.onrender.com", //production
  baseURL: "https://ods2025.onrender.com/", //development
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});