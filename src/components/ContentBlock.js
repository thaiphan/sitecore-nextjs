import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";

export const ContentBlock = ({ fields }) => {
  return (
    <>
      <Text tag="h2" className="display-4" field={fields.heading} />
      <RichText className="contentDescription" field={fields.content} />
    </>
  );
};
