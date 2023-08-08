require('dotenv').config();
const cors = require('cors');
const logger = require('morgan');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  name: 'ShinShina',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use(express.json());
app.use(logger('dev'));
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('Server was run on PORT - ', PORT);
});
