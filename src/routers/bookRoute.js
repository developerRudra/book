const express = require("express");
const router = express.Router();

const {createBook,updateBook,deleteBook,getAllBook,getSingleBook} = require("../controllers/bookController")

router.post("/createBook", createBook);
router.put("/updateBook", updateBook);
router.get("/getSingleBook", getSingleBook);
router.get("/getAllBook", getAllBook);
router.put("/deleteBook", deleteBook)
;
module.exports = router;