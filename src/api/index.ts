import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://www.scorebat.com/video-api/v1/",
});

export default client;
