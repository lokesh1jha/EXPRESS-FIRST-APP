const http = require('http');

//npm install --save body-parser
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

//extend non default also
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST">' +
    '<input type="text" name="product" placeholder="Product Name">'+
    '<input type="text" name="size" placeholder="Product Size">'+
    '<button type="submit">Add Product</button></form>');
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);