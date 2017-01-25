"use strict";
require("reflect-metadata");
var gulp = require('gulp');
var watch = require('gulp-watch');
var spawn = require('child_process').spawn;
var del = require('del');
var mocha = require('gulp-mocha');
var ts = require("gulp-typescript");


var node;
gulp.task('remove-test-db', () => {
    return del(['storage-test', 'storage-test-journal']);
})

gulp.task('test', ['remove-test-db', 'compile'], () => {
    return gulp.src(['dist/tests/*.js'], { read: false })
        .pipe(mocha())
})
gulp.task('remove-dist', () => {
    return del(['dist/*'])

});
gulp.task("compile", ['remove-dist'], function () {
    gulp.src(['src/data/**/*'])
        .pipe(gulp.dest('dist/data'));
    var tsProject = ts.createProject("tsconfig.json");
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("start", ['compile'], function () {
    if (node) {
        node.kill();
    }
    node = spawn('node', ['dist/main.js'], { stdio: 'inherit' })
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task("demon", ['start'], function () {
    var watcher = watch("src/**/*.ts")
    watcher.on('change', () => {
        gulp.start('compile')
    })
});

gulp.task('remove-db', () => {
    return del(['storage']);
});

gulp.task('fill-db', ['remove-db', 'compile'], () => {
    return require('./dist/fill_db')
});

