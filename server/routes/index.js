const express = require('express');
const path = require('path');
const User = require('../models/user');
const Content = require('../models/content');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/home', (req, res) => {
  console.log(req.sessionID);
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Content.findAll({
      include: {
        model: User,
        attributes: ['userID'],
      },
      order: [['createdAt', 'DESC']],
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
