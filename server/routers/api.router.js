const router = require('express').Router();

router.use('/users', usersRouter).use('/tires', tiresRouter).use('/felloe', felloweRouter);

module.exports = router;
