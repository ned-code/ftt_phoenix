/*
gulp.task('webpack-build', function(callback){
    exec('webpack', function(err, stdout, stderr){
        if(err) return callback(err);
        console.log('******************* webpack-build *******************');
        console.log('webpack ', stdout);
        callback(err);
    });
});

gulp.task('server-build', function(callback){
    exec('babel protected -d dist/protected', function(err, stdout, stderr){
        if(err) return callback(err);
        console.log('******************* server-build *******************');
        console.log(stdout);
        callback(err);
    });
});

gulp.task('server-start', ['webpack-build', 'server-build'], function(callback){
    console.log('******************* server-start *******************');
    nodemon({ 
        script: './dist/protected/server.js',
        ext: 'html js',
    });
    callback();
});
*/
var gulp = require('gulp'), 
    jshint = require('gulp-jshint'),
    webpack = require('gulp-webpack')
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon');

gulp.task('jshint', function(callback){
    gulp
    .src(['public/*.js', 'protected/*.js'])
    .pipe(jshint({
        "esnext": true,
        "node": true,
    }))
    .pipe(jshint.reporter('default'));
    callback();
});

gulp.task('webpack', function(callback){
    webpack(require('./webpack.config.js'))
    callback();
});

gulp.task('babel', function(callback){
    gulp
    .src('protected/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/protected'));
    callback();
});

gulp.task('nodemon', function(callback){
    nodemon({
        script: './dist/protected/server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'local' },
        verbose: true,
    });
});


gulp.task('default', ['webpack']);
