const Log = require("../models/log");

//1. listAllLogs(index) Request:GET, Route:/log 
const listAllLogs = (req, res) => {
  Log.find({}, (err, foundLogs) => {
    console.log(foundLogs)
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("Index", { logs: foundLogs });
    }
  });
};

//2. displayCreateNewLogPage Request:GET, Route:/log/new
const displayCreateNewLogPage = (req, res) => {
  res.render("New");
};

//3.Create a new log on submitting Request:POST, Route:/log 
const createNewLog = (req, res) => {
  console.log(req.body);
  if (req.body.broken === "on") {
    req.body.broken = true;
  } else {
    req.body.broken = false;
  }
  Log.create(req.body, (err, createdLog) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/log");
    }
  });
};
//4.showALog Request:GET, Route:/log/:id 

const showALog = (req,res)=>{
     Log.findById(req.params.id,(err,foundLog)=>{
        if(err){
            res.status(400).json(err)
        }else{
            // console.log(foundLog)
            res.status(200).render('Show',{alog : foundLog})
        }
    })
}

//5.Display Edit Page for a Log
const displayEditPage = (req,res)=>{

    Log.findById(req.params.id ,(err,foundLog)=>{
        // console.log(foundLog)
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).render("Edit" ,{editALog :foundLog})
        }
    })
}

// 6.upateALog Form action on submitting edit ->post in database( 3 parameter is important )
const updateALog =(req,res)=>{
if(req.body.broken === "on"){
    req.body.broken = true
}else{
    req.body.broken = false
}
Log.findByIdAndUpdate(req.params.id,req.body,(err,foundLog)=>{
    if (err) {
        res.status(400).json(err)
    } else{
        res.status(200).redirect(`/log/${req.params.id}`)
    }
})
}

//7.Delete a log
const deleteALog = (req,res)=>{
    Log.findByIdAndDelete(req.params.id,(err,foundLog)=>{
        if (err) {
            res.status(400).json(err)
        } else{
            res.status(200).redirect('/log')
        }
    })
}

module.exports = { listAllLogs, displayCreateNewLogPage, createNewLog,showALog,displayEditPage,updateALog,deleteALog};
