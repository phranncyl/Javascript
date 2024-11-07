import express from 'express'
import data from './data/employees.json' assert {type:'json'}
const app = express()
const port = 3000

app.get('/employees', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`My application is listening to http://localhost:${port}`)
})