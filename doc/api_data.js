define({ "api": [
  {
    "group": "api",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/:sitename",
    "title": "to get information a particular page in a particular domain(siteName)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "siteName",
            "description": "<ul> <li>Name of the website (url params) (required)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<ul> <li>Url of the page (query params) (required)(defaults to /)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "html",
            "optional": false,
            "field": "body",
            "description": "<p>return data in HTML format which can be directly consumed by the Bot</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         <!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta http-equiv=\"Cache-Control\" content=\"no-cache\" />\n        <meta http-equiv=\"Pragma\" content=\"no-cache\" />\n        <meta http-equiv=\"Expires\" content=\"0\" />\n        <link rel=\"canonical\" href=\"theguywithideas.com/ideasBlog\" />\n        <title>The Ideas Blog</title>\n        <meta name=\"author\" content=\"Aditya Kumar\">\n        <meta name=\"description\" content=\"A blog by Aditya containing cool ideas and hack related to web,scaling,cloud and much more\">\n        <meta name=\"keywords\" content=\"cloud,aws,scaling,nodejs,mongodb,node,docker,kubernetes,ansible,chef,puppet,redis,websockets,socket.io\">\n        <meta property=\"og:image\" content=\"https://s3.ap-south-1.amazonaws.com/theguywithideas-resources/photos/og/og-bulb.jpg\"/>\n        <meta property=\"og:url\" content=\"theguywithideas.com/ideasBlog\" />\n        <meta property=\"og:title\" content=\"The Ideas Blog\" />\n        <meta property=\"og:description\" content=\"A blog by Aditya containing cool ideas and hack related to web,scaling,cloud and much more\"/>\n        <meta property=\"og:type\" content=\"website\"/>\n    </head>\n    <body>This is the guywithideas.com. Its a blog by Aditya Kumar. It contains a collection of ideas related to web application development, scaling, devops, cloud, nodejs, docker, kubernetes, mongodb</body>\n</html>",
          "type": "html"
        }
      ]
    },
    "filename": "routes/seo.js",
    "groupTitle": "api",
    "name": "GetApiSitename"
  },
  {
    "group": "api",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/:sitename/create",
    "title": "to create the details of a particular page in a particular domain(siteName)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title meta tag of your HTML page. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>meta tag of your HTML page. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>which will be used in og:image as well. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>canonical url of this Page. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bodyText",
            "description": "<p>a text containing relevant body content of HTML page. Use good keywords to improve your ranking.This will appear as website body to the bot. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>author meta tag of the page. (body params) (required)</p>"
          }
        ]
      }
    },
    "filename": "routes/seo.js",
    "groupTitle": "api",
    "name": "PostApiSitenameCreate"
  }
] });
