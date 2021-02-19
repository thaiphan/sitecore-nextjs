import {
  Placeholder,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-react';

interface SingleColumnProps {
  rendering: ComponentRendering;
}

export const SingleColumn = (props: SingleColumnProps) => {
  return <Placeholder name="jss-single-column" rendering={props.rendering} />;
};
