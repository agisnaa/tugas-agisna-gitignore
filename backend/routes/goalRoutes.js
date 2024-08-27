const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    nama: "Agisna Ayu Ningtias"
  })
})

module.exports = router;