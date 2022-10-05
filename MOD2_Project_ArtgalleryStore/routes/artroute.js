const express = require("express");
const router = express.Router();
const Art = require("../models/art");
const multer = require("multer");

//define storage for the images
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/images");
  },
  //add back the extensiion
  filename: function (request, file, callback) {
    callback(null, Date.now() + '____' + file.originalname);
  },
});
//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});
//Connect to Controller
const {
  listAllArt,
  homePage,
  submitArtWork,
  aboutPage,
  contactPage,
  createNewArtPost,
  showAArt,
  deleteAArt,
  displayEditArtPage,
  updateAArt,
} = require("../controllers/artcontroller");

// Define Routes:
//1.Home page,Method:Get,Route:'/arts
router.get("/", homePage);

//2.get Collection(collection page)
router.get("/collection", listAllArt);

//3.SubmitArtwork
router.get("/submitartwork", submitArtWork);

//4.About page
router.get("/about", aboutPage);

//5.Contact Page
router.get("/contact", contactPage);

//////////////////////////////////
//6.Post New Art
router.post("/collection", upload.single("image"), createNewArtPost);

//7.ShowAArt
router.get("/:id", showAArt);

//8.Delete a Art
router.delete("/:id", deleteAArt);

//9.Edit a ArtWork
router.get("/:id/edit", displayEditArtPage);

//10.Update when you submit your edited work
router.put("/:id", updateAArt);

module.exports = router;
