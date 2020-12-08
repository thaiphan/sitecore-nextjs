import { dataApi } from "@sitecore-jss/sitecore-jss-react";
import axios from "axios";

export const getRouteData = async (itemPath: string) => {
  return dataApi.fetchRouteData(itemPath, {
    fetcher: axios.get,
    layoutServiceConfig: {
      serviceUrl: `${process.env.SITECORE_HOST}/sitecore/api/layout/render/jss`,
    },
    querystringParams: {
      sc_apikey: process.env.SITECORE_API_KEY
    }
  });
};
