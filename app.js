import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express()
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + "/views/about.html")
});

app.get('/works', function(req, res){
    res.sendFile(__dirname + "/views/works.html")
});

app.get('/galery', function(req, res){
    res.sendFile(__dirname + "/views/galery.html")
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);