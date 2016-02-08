'use strict';
import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
//import Router from './src/Router';

app.use(express.static(path.resolve(path.resolve(__dirname, '..'), '/public')));

//app.use(Router);
//
app.use('*', function(req, res, next){
    res.sendStatus(200);
});

app.listen(port, function () {
  console.log(' listening on port ' + port);
});


