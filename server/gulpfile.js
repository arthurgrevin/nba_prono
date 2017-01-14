"use strict";
require ("reflect-metadata");
var gulp = require('gulp');
var watch = require('gulp-watch');
var exec = require('child_process').exec;
var del = require('del');
var mocha = require('gulp-mocha');
var ts = require("gulp-typescript");


var server;
gulp.task('remove-test-db',()=>{
    return del(['storage-test','storage-test-journal']);
})

gulp.task('test',['remove-test-db'],()=>{
    return gulp.src( ['tests/*.js'],{read:false})
            .pipe(mocha())
})
gulp.task('remove-dist',()=>{
    return del(['dist/*'])

});
gulp.task("compile",['remove-dist'], function () {
    gulp.src(['src/data/**/*'])
        .pipe(gulp.dest('dist/data'));
    var tsProject = ts.createProject("tsconfig.json");
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("start",['compile','stop'],function(){
    server = exec('nodemon dist/main.js',function (err, stdout, stderr) {
        console.log(stderr);
        console.log(stdout);
        console.log(err);
    })
    return null;
});
gulp.task("stop",()=>{
    if(server){
        server.kill('SIGKILL')
    }
    console.log(server)
    return null;
})
gulp.task("demon",['start'],function(){
    var watcher=watch("src/*.ts")
    watcher.on('change',()=>{
        gulp.start('compile')
    })
});

gulp.task('remove-db',()=>{
    return del(['storage']);
})
gulp.task('fill-db',()=>{
    return require('./fill_db')
});

