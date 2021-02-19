import { Placeholder, RouteData } from '@sitecore-jss/sitecore-jss-react';
import { FC } from 'react';

interface DefaultLayoutProps {
  route: RouteData;
}

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  return (
    <>
      <Placeholder name="jss-header" rendering={props.route} />
      <Placeholder name="jss-main" rendering={props.route} />
      <Placeholder name="jss-footer" rendering={props.route} />
    </>
  );
};
