import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-react';

interface ContentBlockProps {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
}

export const ContentBlock = (props: ContentBlockProps) => {
  return (
    <>
      <Text tag="h2" className="display-4" field={props.fields.heading} />
      <RichText className="contentDescription" field={props.fields.content} />
    </>
  );
};
