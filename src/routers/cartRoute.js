const express = require("express");
const router = express.Router();

const {createCart,quentityUpdate,quentityRemove} = require("../controllers/cartController")

router.put("/quentityRemove", quentityRemove);
router.put("/quentityUpdate", quentityUpdate);
router.post("/createCart", createCart);
module.exports = router;