const express = require('express')
const routes = express.Router()
const teachers = require('./controllers/teachers')
const students = require('./controllers/students')



routes.get('/', function(req, res){
    return res.redirect('/teachers')
})

routes.get('/teachers', teachers.initial)
routes.get('/teachers/create', teachers.create)
routes.post('/teachers', teachers.post)
routes.get('/teachers/:id', teachers.show )
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.put)
routes.delete('/teachers', teachers.delete)

routes.get('/students', students.initial)
routes.get('/students/create', students.create)
routes.post('/students', students.post)
routes.get('/students/:id', students.show )
routes.get('/students/:id/edit', students.edit)
routes.put('/students', students.put)
routes.delete('/students', students.delete)

routes.use(function(req, res) {
res.status(404).render("not-found");
})


module.exports = routes