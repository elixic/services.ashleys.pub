'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),

    APP_SRC = ['src/**/*'],
    ALL_SRC = APP_SRC.concat('*.js');

gulp.task('lint', function() {
    gulp.src(ALL_SRC).
        pipe(jshint({lookup: true})).
        pipe(jshint.reporter("default"));
});

gulp.task('default', ['lint']);