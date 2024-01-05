const express = require('express');
const router = express.Router();
// here is the import the file 
const userController = require('../controller.js/userController')

//  this is making middleware for authentication
const auth = (req, res,next) => {
    if (req.isAuthenticated) {
      return  next()
    }
    res.status(401).send("Unauthorized User")
}

// here is the use middleware name can be used
router.get('/index',auth,userController.user)

module.exports = router;