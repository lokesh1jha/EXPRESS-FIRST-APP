const express = require('express')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST">' +
      '<input type="text" name="product" placeholder="Product Name">'+
      '<input type="text" name="size" placeholder="Product Size">'+
      '<button type="submit">Add Product</button></form>');
  })
  
  
  // router.use gets executed for both request POST & GET
  // router.get limits it to GET Request
  // Similarly router.post limits to POST Request
  router.post('/product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
  });
  

module.exports = router;
