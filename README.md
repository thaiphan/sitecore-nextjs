# Next.js + Sitecore

This repo showcases a possible way of integrating Next.js with Sitecore. I thought the [JSS boilerplate](https://jss.sitecore.com/docs/client-frameworks/react/react-overview) was totally gross so I wanted to go for a Next.js-first approach for my solution.

JSS for React comes with a concept called a "component factory". In JSS, this component factory is automatically generated for you. I have not yet set up this mechanism for my implementation so you'll have to manually map each Sitecore "placeholder" component with its equivalent Next.js React component (see [/src/pages/_app.tsx](/src/pages/_app.tsx#L7))

## Experience Editor

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

## Environments Variables

The following environment variables are all required:

Environment Variable|Description
-|-
SITECORE_HOST|The URL to your Sitecore instance
SITECORE_API_KEY|The value of `sc_apikey` query param when pulling in content from Sitecore.
SITECORE_SITE|The value of `sc_site` query param when pulling in content from Sitecore.
HOST|The URL to your Next.js instance
ASSET_PREFIX|Next.js normally uses relative paths for JS and CSS files. However, because these asset files are not stored in Sitecore, the Sitecore Experience Editor will return 404 errors when it tries to load them.<br />This environment variable fixes that by prepending a URL, e.g. https://www.google.com.au, to your asset files.
PREVIEW_TOKEN|A secret token that you need to pass to `/preview` to prevent access by randos. `/api/preview/` will automatically pass this token through to `/preview` for you.<br />You can generate a secret token using the following website: https://www.uuidgenerator.net/version4

