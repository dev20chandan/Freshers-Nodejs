const express = require('express');
const router = express.Router();
//here is the end point to navigate the url 
router.get('/user',  async function (req, res) {
    res.send("Hello User")
})

module.exports = router;