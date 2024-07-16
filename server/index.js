const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const cors = require('cors');

const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const contentRouter = require('./routes/content');

const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
app.set('port', process.env.PORT || 8080);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.error(err);
  });

passportConfig();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/content', contentRouter);

app.listen(app.get('port'), () => {
  console.log('Server On...');
});
