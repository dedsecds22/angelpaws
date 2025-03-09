const express = require("express");
const router = express.Router();

// Főoldal és About oldal (ugyanaz)
router.get("/", (req, res) => {
    const user = req.session.username ? req.session.username : null;
    res.render("index",{username:user});
});

router.get("/pricing", (req, res)=>{
    const user = req.session.username ? req.session.username : null;
    res.render("pricing",{username:user});
});

module.exports = router;
