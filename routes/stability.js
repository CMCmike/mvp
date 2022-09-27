const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const stabilityController = require("../controllers/stability");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, stabilityController.getPost);

router.post("/createPost", upload.single("file"), stabilityController.createPost);

router.put("/likePost/:id", stabilityController.likePost);

router.delete("/deletePost/:id", stabilityController.deletePost);

module.exports = router;
