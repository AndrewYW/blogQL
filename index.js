const express = require("express");
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { userNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.log(err));

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require ("webpack");
const webpackConfig = require("./webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get("/", (req, res) => res.send("Hello world"));

app.listen(5000, () => console.log('Server running on port 5000'));

