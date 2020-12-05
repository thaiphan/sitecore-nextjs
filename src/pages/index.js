import { dataApi, Placeholder, Text } from "@sitecore-jss/sitecore-jss-react";
import axios from "axios";
import { NextSeo } from "next-seo";
import { VisitorIdentification } from "@sitecore-jss/sitecore-jss-react";

export default function Home(props) {
  return (
    <>
      <NextSeo title={props.sitecore.route.fields.pageTitle.value} />

      <VisitorIdentification />

      <div className="container">
        <Placeholder name="jss-main" rendering={props.sitecore.route} />
      </div>
    </>
  );
}

function dataFetcher(url, data) {
  const prefix =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

  return axios.get(`${prefix}${url}`, {
    withCredentials: true,
  });
}

export async function getStaticProps(context) {
  const { sitecore } = await dataApi.fetchRouteData("/", {
    fetcher: dataFetcher,
  });

  return {
    props: {
      sitecore,
    },
  };
}
