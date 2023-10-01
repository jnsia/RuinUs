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
      return res.status(400).json({ message: info.reason });
    }

    const hash = await bcrypt.hash(userPW, 12);

    await User.create({
      userID,
      userPW: hash,
      email,
    });

    return res.json(req.body);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      return res.status(400).json({ message: info.message });
    }

    return req.login(user, (loginError) => {
      if (loginError) {
        res.send(loginError);
        return next(loginError);
      }

      const token = jwt.sign({ id: user.id }, 'jwt-secret-key');

      return res.send(token);
    });
  })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout((err) => {
    req.session.destroy();
    res.redirect('/');
  });
});

module.exports = router;
