const express = require('express');
const router = express.Router();

//@route Get api/users
//@desc Test route
//@access Public
router.get('/', (req,res) => res.send('Users route'));

module.exports = router;