const express = require('express')

const router = express.Router();

router.post("/", (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let response = {
        statusCode: 200,
        body: null
    };

    if (username === process.env.USER && password === process.env.PASS) {
        response.body = true
    } else {
        response.body = false
    }

    res.send(response)
})

module.exports = router