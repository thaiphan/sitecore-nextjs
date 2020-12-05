import { rest } from "msw";

export const handlers = [
  rest.get(
    "http://localhost:3000/sitecore/api/layout/render/jss?item=%2F",
    (req, res, ctx) => {
      return res(
        ctx.json({
          sitecore: {
            context: {
              pageEditing: false,
              site: { name: "JssDisconnectedLayoutService" },
              pageState: "normal",
              language: "en",
            },
            route: {
              databaseName: "available-in-connected-mode",
              deviceId: "available-in-connected-mode",
              itemId: "home-page",
              itemLanguage: "en",
              itemVersion: 1,
              layoutId: "available-in-connected-mode",
              templateId: "available-in-connected-mode",
              templateName: "available-in-connected-mode",
              name: "home",
              fields: { pageTitle: { value: "Welcome to Sitecore JSS" } },
              placeholders: {
                "jss-main": [
                  {
                    uid: "{2C4A53CC-9DA8-5F51-9D79-6EE2FC671B2D}",
                    componentName: "ContentBlock",
                    dataSource: "available-in-connected-mode",
                    params: {},
                    fields: {
                      heading: { value: "Welcome to Sitecore JSS" },
                      content: {
                        value:
                          '<p>Thanks for using JSS!! Here are some resources to get you started:</p>\n\n<h3><a href="https://jss.sitecore.net" rel="noopener noreferrer">Documentation</a></h3>\n<p>The official JSS documentation can help you with any JSS task from getting started to advanced techniques.</p>\n\n<h3><a href="/styleguide">Styleguide</a></h3>\n<p>The JSS styleguide is a living example of how to use JSS, hosted right in this app.\nIt demonstrates most of the common patterns that JSS implementations may need to use,\nas well as useful architectural patterns.</p>\n\n<h3><a href="/graphql">GraphQL</a></h3>\n<p>JSS features integration with the Sitecore GraphQL API to enable fetching non-route data from Sitecore - or from other internal backends as an API aggregator or proxy.\nThis route is a living example of how to use an integrate with GraphQL data in a JSS app.</p>\n\n<div class="alert alert-dark">\n  <h4>This app is a boilerplate</h4>\n  <p>The JSS samples are a boilerplate, not a library. That means that any code in this app is meant for you to own and customize to your own requirements.</p>\n  <p>Want to change the lint settings? Do it. Want to read manifest data from a MongoDB database? Go for it. This app is yours.</p>\n</div>\n\n<div class="alert alert-dark">\n  <h4>How to start with an empty app</h4>\n  <p>To remove all of the default sample content (the Styleguide and GraphQL routes) and start out with an empty JSS app:</p>\n  <ol>\n    <li>Delete <code>/src/components/Styleguide*</code> and <code>/src/components/GraphQL*</code></li>\n    <li>Delete <code>/sitecore/definitions/components/Styleguide*</code>, <code>/sitecore/definitions/templates/Styleguide*</code>, and <code>/sitecore/definitions/components/GraphQL*</code></li>\n    <li>Delete <code>/data/component-content/Styleguide</code></li>\n    <li>Delete <code>/data/content/Styleguide</code></li>\n    <li>Delete <code>/data/routes/styleguide</code> and <code>/data/routes/graphql</code></li>\n    <li>Delete <code>/data/dictionary/*.yml</code></li>\n  </ol>\n</div>\n',
                      },
                    },
                  },
                ],
              },
            },
          },
        })
      );
    }
  ),
];
