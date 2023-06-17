const router = require('express').Router();
const title = "Kongoni Community Library";

router.get("/", (req,res)=>{
    res.render("index", {title: `${title} - Homepage`});
   
})
router.get("/login", (req,res)=>{
    res.render("login", {title: `${title} - Login   `});
})


module.exports = router;