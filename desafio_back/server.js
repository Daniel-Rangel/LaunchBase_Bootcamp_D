const express = require("express")
const nunjucks = require("nunjucks")

const data = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views",{
  express:server,
  autoescape: false
})


server.get("/", function(req, res){
  return res.render('courses', {cursos : data})
})

server.get("/sobre", function(req,res){
  const sobre = {
    imgLogo : 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    titulo : 'Rocketseat',
    descricao : 'Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível',
    tecnologias : [
      {nome : 'JavaScript'},
      {nome : 'Nodejs'},
      {nome : 'ReactJS'},
      {nome : 'React Native'}
    ]
  }
  return res.render('about', {sobre})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
})
server.listen(5000, function(){
  console.log("rodando")
})

