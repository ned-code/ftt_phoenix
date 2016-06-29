import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await

const Router = new Express.Router();

export default [

  // See in /app/redux/modules/posts/posts.js
  Router.get('/api/user', wrap(async function(req, res) {
    res.json({
      data: {
        first_name: "A",
        last_name: "B",
        email: "a@a.com"
      }
    });
  })),
];
