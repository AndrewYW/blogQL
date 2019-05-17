const express = require("express");
const app = express();

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require ("webpack");
const webpackConfig = require("./webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get("/", (req, res) => res.send("Hello world"));

app.listen(5000, () => console.log('Server running on port 5000'));

