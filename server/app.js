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
const userRouter = require('./routes/user');
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

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
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
app.use('/user', userRouter);
app.use('/content', contentRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use((req, res, next) => {
  res.status(200).send('404지롱~');
});

app.listen(app.get('port'), () => {
  console.log('Server On...');
});
