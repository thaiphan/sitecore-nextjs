import { Field, RouteData } from "@sitecore-jss/sitecore-jss-react";
import { GetServerSideProps } from "next";
import { getRouteData } from "../services/sitecore";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { readRequestBodyAsJson } from "@sitecore-jss/sitecore-jss-rendering-host/dist/ssrMiddleware";

interface PreviewProps {
  sitecore: {
    route: Omit<RouteData, "fields"> & {
      fields: {
        pageTitle: Field<string>;
      };
    };
  };
}

export default function Preview(props: PreviewProps) {
  return <DefaultLayout route={props.sitecore.route} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { previewData, preview, previewToken } = await readRequestBodyAsJson(
    context.req
  );

  if (
    preview &&
    previewToken === process.env.PREVIEW_TOKEN &&
    previewData?.sitecore
  ) {
    return {
      props: {
        sitecore: previewData.sitecore,
      },
    };
  }

  // TODO: Deliver some kind of 401 error to the user
  const { sitecore } = await getRouteData("/");

  return {
    props: {
      sitecore,
    },
  };
};
