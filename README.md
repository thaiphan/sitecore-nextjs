Next.js + Sitecore
==================

This repo showcases a possible way of integrating Next.js with Sitecore. I thought the [JSS boilerplate](https://jss.sitecore.com/docs/client-frameworks/react/react-overview) was totally gross so I wanted to go for a Next.js-first approach for my solution.

JSS for React comes with a concept called a "component factory". In JSS, this component factory is automatically generated for you. However, in my prototype, I chose to have it so that you need to manually and explicitly populate your component factory. This is mostly because I think it's more appropriate to be explicit. Also, because I didn't want to write a script to generate it automatically.

I'm too poor for a Sitecore licence so I was unable to test against the Experience Editor. I suspect that it should work if you configure Sitecore to use a [remote rendering host](https://jss.sitecore.com/docs/fundamentals/services/view-engine#http-rendering-engine). If somebody is kind enough to lend me a free Sitecore server, I would love to flesh this out some more.
