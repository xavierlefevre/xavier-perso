/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

const express = require('express');
const app = express();

app.use(express.static('src'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Serveur en route!');
});
