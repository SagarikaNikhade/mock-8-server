const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 const port = process.env.PORT || 5000
server.use(middlewares)
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running at' + port)
})