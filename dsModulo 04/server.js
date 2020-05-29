const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views",{
  express:server,
  autoescape: false, // permite o uso das tags html e links
  noCache: true // faz atualização de cache(cache e o armazenamento automatico do pc em browser)
})


server.get("/", function(req, res){
  return res.render('Teachers')
})

server.use(function(req, res) {
  res.status(404).render("not-found");
})

server.listen(5000, function(){
  console.log("rodando")
})

