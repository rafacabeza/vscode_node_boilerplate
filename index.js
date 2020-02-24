const express = require('express');
const fs = require('fs');

const x = 3;
const app = express();

app.listen(3000, () => {
  console.log('Listenting on port 3000');
});

const ab = function(a) {
  console.log(a);
};
