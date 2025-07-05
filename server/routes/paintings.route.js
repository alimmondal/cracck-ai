const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("painting hit")
})

// router.post("/", (req,res)=>{});




module.exports = router;
