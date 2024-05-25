const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
    res.render("home")
})

router.get("/formulario/:id", (req, res) => {
    res.render("formulario")
})
router.get("/formularioCreate", (req, res) => {
    res.render("formcreate")
})

router.get("/favoritas", (req, res) => {
    res.render("favoritas")
})



module.exports = router