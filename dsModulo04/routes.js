const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

//redireciono para rota
routes.get('/', function(req, res){
    return res.redirect('/teachers')
})
//direciona a magina possivel listagem futuramente
routes.get("/teachers", teachers.initial)
//direciona para o criete de teacher
routes.get('/teachers/create', teachers.create)
// mostra teacher do data
routes.get('/teachers/:id', teachers.show )
//edita um professor
routes.get('/teachers/:id/edit', teachers.edit)

//cria um novo professor no data
routes.post('/teachers', teachers.post)

//cria edição
routes.put('/teachers', teachers.put)
routes.delete('/teachers', teachers.delete)
routes.use(function(req, res) {
res.status(404).render("not-found");
})


module.exports = routes