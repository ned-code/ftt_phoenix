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
    gulp
    .src('public/client.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/public/'));
    callback();
});

gulp.task('babel', function(callback){
    gulp
    .src('protected/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/protected'));
    callback();
});

gulp.task('nodemon', ['jshint', 'webpack', 'babel'], function(callback){
    console.log('#######################################');
    nodemon({
        script: './dist/protected/server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'local' },
        verbose: true,
        tasks : ['jshint', 'webpack', 'babel']
    });
});


gulp.task('default', ['nodemon']);
