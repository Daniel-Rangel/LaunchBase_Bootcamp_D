const express = require("express")
const nunjucks = require("nunjucks")
const routes = require('./routes')


const server = express()

server.use(express.urlencoded({ extended: true}))
server.use(express.static("public"))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views",{
  express:server,
  autoescape: false, // permite o uso das tags html e links
  noCache: true // faz atualização de cache(cache e o armazenamento automatico do pc em browser)
})




server.listen(5000, function(){
  console.log("rodando")
})

