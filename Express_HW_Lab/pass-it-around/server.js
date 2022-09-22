const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1 style="color:blue;padding: 100px 0px 0px 500px;">99 Bottles of beer on the wall</h1> \n <a style="color:blue;padding: 100px 0px 0px 580px;" href="http://localhost:3000/99">Take one down, Pass it around</a>`
  );
});

app.get("/:numofbottles", (req, res) => {
  let num = req.params.numofbottles;
  num--;
  if (num > 0) {
    res.send(
      `<h1 style="color:blue;padding: 100px 0px 0px 500px;">${num} Bottles of beer on the wall</h1> \n <a style="color:blue;padding: 100px 0px 0px 580px;" href="http://localhost:3000/${num}">Take one down, Pass it around</a>`
    );
  } else {

    res.send(
      `<h1 style="color:blue;padding: 100px 0px 0px 550px;">0 Bottles Left</h1> \n<h2 style="color:red;padding: 0px 0px 0px 470px;">Click link below to Start Over Again</h2>\n <a style="color:blue;padding: 100px 0px 0px 580px;" href="http://localhost:3000/100">Start over again</a>`
    );
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
