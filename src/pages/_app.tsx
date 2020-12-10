import { SitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import "../styles/globals.css";
import { ContentBlock } from "../components/organisms/ContentBlock";
import { ComponentFactory } from "@sitecore-jss/sitecore-jss-react/types/components/sharedTypes";

const componentFactory: ComponentFactory = (componentName) => {
  const components = new Map();
  components.set("ContentBlock", ContentBlock);

  return components.get(componentName);
};

function MyApp({ Component, pageProps }) {
  return (
    <SitecoreContext
      componentFactory={componentFactory}
      context={pageProps.sitecore}
    >
      <Component {...pageProps} />
    </SitecoreContext>
  );
}

export default MyApp;
