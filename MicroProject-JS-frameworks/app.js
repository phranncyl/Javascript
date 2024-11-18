import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import data from './data/cars.json' assert {type:'json'};


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Health check
app.get('/', (req, res) => {
  res.send('<h1>Micro Project: Group 11</h1>');
});

//Ask Express to run my website (static files => public):
app.use('/website', express.static(join(__dirname, 'public')));
//URL => http://localhost:3000/website

//JSON data check
//http://localhost:3000/api/cars
app.get('/api/cars', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`My application is listening to http://localhost:${port}`);
});