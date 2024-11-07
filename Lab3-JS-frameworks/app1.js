import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello, we are group11!</h1>')
})

app.listen(port, () => {
  console.log(`My application is listening to http://localhost:${port}`)
})