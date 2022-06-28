const expres = require('express');

const router = expres.Router();

router.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;