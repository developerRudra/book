const express = require("express");
const router = express.Router();

const {addAddresh,updateAddresh,getAllAddreshByUserId,getSingleAddreshById,deleteAddresh} = require("../controllers/addreshController")

router.post("/addAddresh", addAddresh);
router.put("/updateAddresh", updateAddresh);
router.get("/getAllAddreshByUserId", getAllAddreshByUserId);
router.get("/getSingleAddreshById",getSingleAddreshById );
router.put("/deleteAddresh", deleteAddresh);
module.exports = router;