import express from 'express';
const app = express();

app.use( (req, res) => {
  console.log('!!!!!!!');
});

app.listen(4000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:4000/');
})
