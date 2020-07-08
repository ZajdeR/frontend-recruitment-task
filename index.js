const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'src')));
app.use('/internal', createProxyMiddleware({ target: process.env.TARGET_DOMAIN, changeOrigin: true }));

app.listen(process.env.PORT);