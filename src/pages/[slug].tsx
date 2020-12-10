import { Field, RouteData } from "@sitecore-jss/sitecore-jss-react";
import { GetServerSideProps } from "next";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { getRouteData } from "../services/sitecore";

interface PageProps {
  sitecore: {
    route: Omit<RouteData, "fields"> & {
      fields: {
        pageTitle: Field<string>;
      };
    };
  };
}

export default function Page(props: PageProps) {
  return <DefaultLayout route={props.sitecore.route} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { sitecore } = await getRouteData(context.resolvedUrl);

  return {
    props: {
      sitecore,
    },
  };
};
