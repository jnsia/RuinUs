const express = require('express');
const { User, Content } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {

})

router.get('/sort', async (req, res, next) => {
      try {
    const content = await Content.findAll({
      include: {
        model: User,
        attributes: ['id', 'nickname'],
      },
      order: [['createdAt', 'DESC']],
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;