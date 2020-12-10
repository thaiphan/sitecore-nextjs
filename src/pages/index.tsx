import { Field, RouteData } from "@sitecore-jss/sitecore-jss-react";
import { GetStaticProps } from "next";
import { getRouteData } from "../services/sitecore";
import { DefaultLayout } from "../components/templates/DefaultLayout";

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
