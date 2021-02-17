import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import '../styles/globals.css';
import { ContentBlock } from '../components/organisms/ContentBlock';
import { ComponentFactory } from '@sitecore-jss/sitecore-jss-react/types/components/sharedTypes';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

const componentFactory: ComponentFactory = (componentName) => {
  const components = new Map();
  components.set('ContentBlock', ContentBlock);

  return components.get(componentName);
};

function MyApp({ Component, pageProps }: AppProps) {
  let Layout = DefaultLayout;

  return (
    <SitecoreContext
      componentFactory={componentFactory}
      context={pageProps.sitecore}
    >
      <NextSeo title={pageProps.sitecore.route.fields.pageTitle?.value} />

      <Layout route={pageProps.sitecore.route}>
        <Component {...pageProps} />
      </Layout>
    </SitecoreContext>
  );
}

export default MyApp;
