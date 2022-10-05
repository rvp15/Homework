//Controller expprt data from model(database depanding on request it get)

const { render } = require("react-dom");
const Art = require("../models/art");

//1.Home Page
const homePage = (req, res) => {
  res.render("Home");
};

//2.List all art Request:GET Route:'/arts'
const listAllArt = (req, res) => {
  Art.find({}, (err, foundArt) => {
    // console.log(foundArt)
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("Collection", { arts: foundArt });
    }
  });
};

//3.SubmitArtWork
const submitArtWork = (req, res) => {
  res.render("SubmitArtWork");
};

//4.AboutPage
const aboutPage = (req, res) => {
  res.render("About");
};

//5.Contact Page
const contactPage = (req, res) => {
  res.render("Contact");
};
/////////////////////////////////////
//Createnewpost-submitArtWork-Display submit Form
const displaySubmitForm = (req, res) => {
  res.render("SubmitArtWork");
};

//6.Post new Art
const createNewArtPost = (req, res) => {
  const reqObj = {
    ...req.body,
    image: req.file.filename.split("____")[1],
    imageFullname: req.file.filename,
  };
  Art.create(reqObj, (err, createdArt) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/arts/collection");
    }
  });
};

//7.ShowAArt
const showAArt = (req, res) => {
  Art.findById(req.params.id, (err, foundArt) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(`controllerShow ${foundArt}`);
      res.status(200).render("ShowArt", { aart: foundArt });
    }
  });
};

//8. DeleteAArt
const deleteAArt = (req, res) => {
  Art.findByIdAndDelete(req.params.id, (err, foundArt) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/arts/collection");
    }
  });
};
//9.displayEditArtPage
const displayEditArtPage = (req, res) => {
  Art.findById(req.params.id, (err, foundArt) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("Edit", { editAArt: foundArt });
    }
  });
};

//10.Update the edited Artwork
const updateAArt = (req, res) => {
  console.log(req.body);
  Art.findByIdAndUpdate(req.params.id, req.body, (err, foundArt) => {
    // console.log(`updated:${req.body}`)
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect(`/arts/${req.params.id}`);
    }
  });
};

module.exports = {
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
};
