'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    del = require('del'),

    APP_SRC = ['src/**/*'],
    ALL_SRC = APP_SRC.concat('*.js');

gulp.task('lint', function() {
    gulp.src(ALL_SRC).
        pipe(jshint({lookup: true})).
        pipe(jshint.reporter("default"));
});

gulp.task('clean', function() {
    del(['build']);
});

gulp.task('default', ['lint'], function() {
    gulp.src(ALL_SRC)
        .pipe(gulp.dest('build'));
});