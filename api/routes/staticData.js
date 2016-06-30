import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await
import fs from 'fs';
import path from 'path';

const Router = new Express.Router();

export default [
  Router.get('/api/staticData/load', wrap(async function(req, res) {
    fs.readFile(path.join(__dirname, '../static/static_data.json'), (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
    
  })),
];
