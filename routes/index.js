const express = require('express');
const router = express.Router();
// here is the import the file 
const userController = require('../controller.js/userController')
//here is the end point to navigate the url  
// this both function work same but change the end point and make more efficient and clear the router  
router.get('/user',  async function (req, res) {
    res.send("Hello User")
})
// here is the use the function name user 
router.get('/index',userController.user)

module.exports = router;