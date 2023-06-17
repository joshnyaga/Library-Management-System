const router = require('express').Router();
const title = "Kongoni Community Library";

router.get("/", (req,res)=>{
    res.render("index", {title: `${title} - Homepage`})
})

module.exports = router;