const express = require('express')
const routes = express.Router()
const instructor = require('./instructors')

routes.get('/', function(req, res){
    return res.redirect('/instructor')
})

routes.get("/instructor", function(req, res){
return res.render('instructor/Teachers')
})

routes.get('/instructor/create', function(req,res){
    return res.render('instructor/create')
})

routes.post('/instructor', instructor.post)

routes.use(function(req, res) {
res.status(404).render("not-found");
})


module.exports = routes