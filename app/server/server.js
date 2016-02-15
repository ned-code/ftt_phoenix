'use strict';
import express from 'express';

let app = express();

app.use('*', function(req, res){
    console.log('routes');
    res.sendStatus(200);
});

app.listen(3000, function(){
    console.log('---> server start on 3000 port <---');
});

//
