const router = require("express").Router();
// const Mustache = require("mustache")
router.get('/certificate', async (req, res) => {
    console.log('working')
    res.send('hello')
  });
  router.get('/upload', async (req, res) => {
    console.log('working')
    // res.send('hello')
    res.send('upload file please')
  });


module.exports = router;