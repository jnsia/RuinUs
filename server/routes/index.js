const express = require('express');
const User = require('../models/user');
const Content = require('../models/content');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/home/:encodeToken', async (req, res) => {
  const encodeToken = req.params.encodeToken
  const { id, iat } = jwt.verify(encodeToken, 'jwt-secret-key')

  try {
    const posts = await Content.findAll({
      include: {
        model: User,
        attributes: ['id'],
      },
      where: {
        writer: id
      },
      order: [['createdAt', 'DESC']],
    });

    res.status(200).send(posts)
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
