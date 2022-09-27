const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const drugproductController = require("../controllers/drugproduct");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, drugproductController.getPost);

router.post("/createPost", upload.single("file"), drugproductController.createPost);

router.put("/likePost/:id", drugproductController.likePost);

router.delete("/deletePost/:id", drugproductController.deletePost);

module.exports = router;
