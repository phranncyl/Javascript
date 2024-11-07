import express from 'express'
const app = express()
const port = 3000

app.post('/crud', (req, res) => {
  res.send('Creat using post() method')
})

app.get('/crud', (req, res) => {
    res.send('Read using read() method')
  })

app.put('/crud', (req, res) => {
    res.send('Update using put() method')
})

app.delete('/crud', (req, res) => {
    res.send('Delete using delete() method')
})
  
app.listen(port, () => {
  console.log(`My application is listening to http://localhost:${port}`)
})