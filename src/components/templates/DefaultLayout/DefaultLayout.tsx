import { Placeholder, RouteData } from '@sitecore-jss/sitecore-jss-react';
import { FC } from 'react';

interface DefaultLayoutProps {
  route: RouteData;
}

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  return (
    <div className="container mx-auto">
      <Placeholder name="jss-main" rendering={props.route} />
    </div>
  );
};
