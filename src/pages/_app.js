import { SitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import "../styles/globals.css";
import { ContentBlock } from "../components/ContentBlock";

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

const componentFactory = (componentName) => {
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
