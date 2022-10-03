//load express
const express = require('express')
//create router
const router = express.Router()
//load data from mongodb
const Log = require('../models/log')

const{
    displayCreateNewLogPage,
    createNewLog,
    listAllLogs,
    showALog,
    displayEditPage,
    updateALog,
    deleteALog
} = require('../controllers/logcontroller')

//1.List all logs(home/index page)
router.get('/', listAllLogs)

//2.Display create log page
router.get('/new' ,displayCreateNewLogPage)

//3.Post new log
router.post('/',createNewLog)

//4.Show a particular log
router.get('/:id',showALog)

//5.Show Edit a Log Page
router.get('/:id/edit',displayEditPage)

//6.Update:when submit update a log(form action:{`/log/${editALog._id}?_method=PUT`})
router.put('/:id',updateALog)

//7.Delete a log 
router.delete('/:id' ,deleteALog)

module.exports = router
