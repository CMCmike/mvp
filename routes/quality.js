const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const qualityController = require("../controllers/quality");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, qualityController.getPost);

router.post("/createPost", upload.single("file"), qualityController.createPost);

router.put("/likePost/:id", qualityController.likePost);

router.delete("/deletePost/:id", qualityController.deletePost);

module.exports = router;
