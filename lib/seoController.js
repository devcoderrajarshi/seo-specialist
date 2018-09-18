const fs = require('fs')
const siteLib = require('./siteLib')
const redis = require("redis")
const conf = require('./../appConf')

const client = redis.createClient({

    port: conf.redisPort,
    host: conf.redisEndPoint,
    password: conf.redisPassWord,

})

client.on("error", function (err) {
    //console.log("Error " + err);
    process.exit(1);
});




let getAllPagesOfASite = (req, res) => {
    
    client.hgetall(req.params.siteName, (err, pages) => {

        if (err) {
            //console.log(err)
            res.send({ 'status': 500, 'data': err })
        }
        else {
            res.send({ 'status': 200, 'data': pages })
        }

    });//end hgetll


};//end getAllPages

let createSite = (req, res) => {


    let pageData = JSON.stringify({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        url: req.body.url,
        keywords: req.body.keywords,
        bodyText: req.body.bodyText,
        author: req.body.author
    });

    client.hset(req.params.siteName, req.body.page, pageData, (err, result) => {
        if (err) {
            //console.log(err)
            res.send({ 'status': 500, 'data': err })
        }
        else {
            res.send({ 'status': 200, 'data': result })
        }

    });//end hset




};//end create site

let generateSite = (req, res) => {

    //console.log(req.params.siteName);
    //console.log(req.query.page);
    let page = (req.query.page!=null&&req.query.page!=undefined)?req.query.page:'/'
    let getSitePage = () => {
        return new Promise((resolve, reject) => {
            client.hget(req.params.siteName,page, (err, foundPage) => {

                if (err) {
                    //console.log(err)
                    reject(err)
                }
                else {
                    let mySiteData = JSON.parse(foundPage)
                    //console.log(mySiteData)
                    if(mySiteData==null || mySiteData==undefined){
                        //console.log("page not found")
                        reject("page not found")
                    }
                    else{
                        resolve(mySiteData)
                    }
                    
                }



            });//end hget


        });//end promise
    }// end readFile

    let generateMeta = (siteJson) => {

        return new Promise((resolve, reject) => {
            let myHTML = siteLib.generateHTML(siteJson)
            myHTML.then((data) => {
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })


        });// end generateMeta

    }//end generate meta

    getSitePage(req, res)
        .then(generateMeta)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((err) => {
            //console.log(err)
            res.status(404).send(err)

        })


};//end generateSiteMap


module.exports = {

    generateSite: generateSite,
    createSite: createSite,
    getAllPagesOfASite: getAllPagesOfASite

}   