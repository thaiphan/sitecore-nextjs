import { dataApi } from '@sitecore-jss/sitecore-jss-react';
import axios from 'axios';

export const getRouteData = async (itemPath: string) => {
  let querystringParams: {
    sc_apikey: string;
    sc_site?: string;
  } = {
    sc_apikey: process.env.SITECORE_API_KEY,
  };

  if (process.env.SITECORE_SITE) {
    querystringParams.sc_site = process.env.SITECORE_SITE;
  }

  return dataApi.fetchRouteData(itemPath, {
    fetcher: axios.get,
    layoutServiceConfig: {
      serviceUrl: `${process.env.SITECORE_HOST}/sitecore/api/layout/render/jss`,
    },
    querystringParams,
  });
};
