# Next.js + Sitecore

This repo showcases a possible way of integrating Next.js with Sitecore. I thought the [JSS boilerplate](https://jss.sitecore.com/docs/client-frameworks/react/react-overview) was totally gross so I wanted to go for a Next.js-first approach for my solution.

JSS for React comes with a concept called a "component factory". In JSS, this component factory is automatically generated for you. However, in my prototype, I chose to have it so that you need to manually and explicitly populate your component factory. This is mostly because I think it's more appropriate to be explicit. Also, because I didn't want to write a script to generate it automatically.

This repo works with the Experience Editor using a [remote rendering host](https://jss.sitecore.com/docs/fundamentals/services/view-engine#http-rendering-engine). You need to set the following values in `\App_Config\Sitecore\JavaScriptServices\Sitecore.JavaScriptServices.Apps.config`:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  <sitecore>
    <javaScriptServices>
      <apps>
        <app name="defaults"
          serverSideRenderingEngine="http"
          serverSideRenderingEngineEndpointUrl="https://my-self-hosted-nextjs-app.com.au/api/preview"
        />
      </apps>
    </javaScriptServices>
  </sitecore>
</configuration>
```
