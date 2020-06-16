const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')



routes.get('/', function(req, res){
    return res.redirect('/teachers')
})
routes.get("/teachers", teachers.initial)
routes.get('/teachers/create', teachers.create)
routes.get('/teachers/:id', teachers.show )
routes.get('/teachers/:id/edit', teachers.edit)
routes.post('/teachers', teachers.post)
routes.put('/teachers', teachers.put)
routes.delete('/teachers', teachers.delete)
routes.use(function(req, res) {
res.status(404).render("not-found");
})


module.exports = routes