const express = require('express');
const router = express.Router();
const seoController = require('./../lib/seoController');

module.exports.setRouter = (app)=>{

    const baseUrl = '/api';
    app.get(`${baseUrl}/:siteName/all`,seoController.getAllPagesOfASite)
    app.get(`${baseUrl}/:siteName`,seoController.generateSite)
    app.post(`${baseUrl}/:siteName/create`,seoController.createSite)


};//end router