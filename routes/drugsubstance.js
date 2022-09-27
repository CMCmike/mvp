const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const drugsubstanceController = require("../controllers/drugsubstance");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, drugsubstanceController.getPost);

router.post("/createPost", upload.single("file"), drugsubstanceController.createPost);

router.put("/likePost/:id", drugsubstanceController.likePost);

router.delete("/deletePost/:id", drugsubstanceController.deletePost);

module.exports = router;
