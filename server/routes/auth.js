const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  const { userID, userPW, email } = req.body;

  try {
    const exUser = await User.findOne({ where: { userID } });

    if (exUser) {
      return res.status(400).json({ message: "가입한 이메일입니다." });
    }

    const hash = await bcrypt.hash(userPW, 12);

    await User.create({
      userID,
      userPW: hash,
      email,
    });

    return res.json(req.body);
  } catch (error) {
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(info);
    }

    if (!user) {
      return res.status(401).send(info.message || 'Authentication failed');
    }

    req.login(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }

      const token = jwt.sign({ id: user.id }, 'jwt-secret-key');

      res.send(token);
    });
  })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout((err) => {
    req.session.destroy();
  });
});

module.exports = router;
