import {
  Field,
  Placeholder,
  VisitorIdentification,
  RouteData,
} from "@sitecore-jss/sitecore-jss-react";
import { NextSeo } from "next-seo";

interface DefaultLayoutProps {
  route: Omit<RouteData, "fields"> & {
    fields: {
      pageTitle: Field<string>;
    };
  };
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  return (
    <>
      <NextSeo title={props.route.fields.pageTitle.value} />

      <VisitorIdentification />

      <div className="container">
        <Placeholder name="jss-main" rendering={props.route} />
      </div>
    </>
  );
};
