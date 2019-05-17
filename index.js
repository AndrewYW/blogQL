const express = require("express");
const app = express();
const mongoose = require('mongoose');
const expressGraphQL = require("express-graphql");

const schema = require("./schema/schema");
const User = require("./models/user");

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.log(err));

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require ("webpack");
const webpackConfig = require("./webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(5000, () => console.log('Server running on port 5000'));

