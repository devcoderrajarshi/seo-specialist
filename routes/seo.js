const express = require('express');
const router = express.Router();
const seoController = require('./../lib/seoController');

module.exports.setRouter = (app) => {

    const baseUrl = '/api';
    

    app.get(`${baseUrl}/:siteName/all`, seoController.getAllPagesOfASite)

    /**
     * @apiGroup api
     * @apiVersion  1.0.0
     * @api {get} /api/:sitename to get information a particular page in a particular domain(siteName)
     *
     * @apiParam {string} siteName - Name of the website (url params) (required)
     * @apiParam {string} page - Url of the page (query params) (required)(defaults to /)
     *
     * @apiSuccess {html} body return data in HTML format which can be directly consumed by the Bot
     * 
     * @apiSuccessExample {html} Success-Response:
         <!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link rel="canonical" href="theguywithideas.com/ideasBlog" />
        <title>The Ideas Blog</title>
        <meta name="author" content="Aditya Kumar">
        <meta name="description" content="A blog by Aditya containing cool ideas and hack related to web,scaling,cloud and much more">
        <meta name="keywords" content="cloud,aws,scaling,nodejs,mongodb,node,docker,kubernetes,ansible,chef,puppet,redis,websockets,socket.io">
        <meta property="og:image" content="https://s3.ap-south-1.amazonaws.com/theguywithideas-resources/photos/og/og-bulb.jpg"/>
        <meta property="og:url" content="theguywithideas.com/ideasBlog" />
        <meta property="og:title" content="The Ideas Blog" />
        <meta property="og:description" content="A blog by Aditya containing cool ideas and hack related to web,scaling,cloud and much more"/>
        <meta property="og:type" content="website"/>
    </head>
    <body>This is the guywithideas.com. Its a blog by Aditya Kumar. It contains a collection of ideas related to web application development, scaling, devops, cloud, nodejs, docker, kubernetes, mongodb</body>
</html>
    */
    app.get(`${baseUrl}/:siteName`, seoController.generateSite)

    /**
     * @apiGroup api
     * @apiVersion  1.0.0
     * @api {post} /api/:sitename/create to create the details of a particular page in a particular domain(siteName)
     *
    * @apiParam {string} title title meta tag of your HTML page. (body params) (required)
     * @apiParam {string} description meta tag of your HTML page. (body params) (required)
     * @apiParam {string} image which will be used in og:image as well. (body params) (required)
     * @apiParam {string} url canonical url of this Page. (body params) (required)
     * @apiParam {string} bodyText a text containing relevant body content of HTML page. Use good keywords to improve your ranking.This will appear as website body to the bot. (body params) (required)
     * @apiParam {string} author author meta tag of the page. (body params) (required)
     * 
         
    */
    app.post(`${baseUrl}/:siteName/create`, seoController.createSite)


};//end router