let express = require('express');
let router = express.Router();


module.exports.displayHomePage = (req, res, next) => {
    res.render('pages/home', {title: 'Home'});
}

module.exports.displayAboutMePage = (req, res, next) => {
    res.render('pages/aboutme', { title: 'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('pages/projects', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('pages/services', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('pages/contact', { title: 'Contact'});
}

module.exports.displaySecurePage = (req, res, next) => {
    res.render('pages/secure', { title: 'Secure Section'});
}