"use strict";

var gulp =require('gulp');
var connect =require('gulp-connect');
var open = require('gulp-open');

var config = {

	port: 8081,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './index.html',
		dist: './dist'
	}
}

gulp.task('connect', function () {

	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	})
});

gulp.task('open', ['connect'], function () {

	gulp.src('./index.html')
		.pipe(open({
			uri: config.devBaseUrl + ':' + config.port + '/'
		}));
});

gulp.task('html', function () {

	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('watch', function () {

	gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'open', 'watch']);
