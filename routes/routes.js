const router = require('express').Router();

router.get("/users", (req,res)=>{
    res.render('index', {title: ' HomePage'})
})

module.exports = router;