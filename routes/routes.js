const router = require('express').Router();

router.get("/users", (req,res)=>{
    res.render("index", {title: "Homepage"})
})

module.exports = router;