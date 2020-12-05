import { dataApi } from "@sitecore-jss/sitecore-jss-react";
import axios from "axios";

const dataFetcher = async (url: string) => {
  const prefix =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

  return axios.get(`${prefix}${url}`, {
    withCredentials: true,
  });
};

export const getRouteData = async (url: string) => {
  return dataApi.fetchRouteData(url, {
    fetcher: dataFetcher,
  });
};
