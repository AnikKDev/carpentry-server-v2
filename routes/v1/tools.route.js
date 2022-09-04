const express = require('express');
const { getAllTools, saveATool, getSingleTool } = require('../../controllers/tools.controller');
const limiter = require('../../middleware/limiter');
const viewCoult = require('../../middleware/viewCount');

const router = express.Router()

// get request with router

// ekhane tools route er moddhe, '/' lekha ta maane hocche oi route er path ke indicate kora. hence, '/tools' = '/'
/* router.get('/', async (req, res) => {
    res.send("tools found")
}) */
/* router.get('/:id', async (req, res) => {
    res.send("tools found with id")
}) */
// post request with router
/* router.post('/tools', async (req, res) => {
    res.send("tool added")
}) */

// api documentation


// router baarbaar na bole ekbare shortcut
router.route('/')
    .get(
        getAllTools
    )
    .post(
        saveATool
    );
router.route('/:id')
    .get(
        viewCoult, limiter, getSingleTool
    )


module.exports = router;