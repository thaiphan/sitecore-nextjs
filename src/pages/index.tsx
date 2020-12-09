import { Field, RouteData } from "@sitecore-jss/sitecore-jss-react";
import { GetServerSideProps, GetStaticProps } from "next";
import { getRouteData } from "../services/sitecore";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { readRequestBodyAsJson } from "@sitecore-jss/sitecore-jss-rendering-host/dist/ssrMiddleware";
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
  return <DefaultLayout route={props.sitecore.route} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { sitecore } = await getRouteData("/");

  return {
    props: {
      sitecore,
    },
    revalidate: 1,
  };
};
