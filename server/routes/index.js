//<!--index.js, Leticia Lopez, 301087698, 09-10-2020-->
let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/aboutme', indexController.displayAboutMePage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Secure page. */
router.get('/secure', indexController.displaySecurePage);

module.exports = router;


