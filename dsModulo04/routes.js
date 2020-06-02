const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res){
    return res.redirect('/Teachers')
})

routes.get("/Teachers", function(req, res){
return res.render('instructor/Teachers')
})

routes.get('/Teachers/create', function(req,res){
    return res.render('instructor/create')
})

routes.post('/Teachers', teachers.post)

routes.use(function(req, res) {
res.status(404).render("not-found");
})


module.exports = routes