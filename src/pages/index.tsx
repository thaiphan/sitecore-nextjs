import {
  dataApi,
  Field,
  Placeholder,
  VisitorIdentification,
  RouteData,
} from "@sitecore-jss/sitecore-jss-react";
import axios from "axios";
import { NextSeo } from "next-seo";

interface HomeProps {
  sitecore: {
    route: Omit<RouteData, "fields"> & {
      fields: {
        pageTitle: Field<string>;
      };
    };
  };
}

export default function Home(props: HomeProps) {
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

const dataFetcher = (url: string) => {
  const prefix =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

  return axios.get(`${prefix}${url}`, {
    withCredentials: true,
  });
};

export async function getStaticProps() {
  const { sitecore } = await dataApi.fetchRouteData("/", {
    fetcher: dataFetcher,
  });

  return {
    props: {
      sitecore,
    },
  };
}
