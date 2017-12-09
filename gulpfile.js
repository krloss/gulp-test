var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('clean',function() {
	return gulp.src('dist/').pipe(clean());
});

gulp.task('jshint', function() {
	return gulp.src('js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('uglify',['clean'],function() {
	return es.merge([
			gulp.src(['bower_libs/**/dist/*.min.js']),
			gulp.src('js/**/*.js').pipe(concat('tmp.js')).pipe(uglify())
		])
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('cleanCSS',function() {
	return gulp.src('css/**/*.css')
		.pipe(cleanCSS())
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('htmlmin',function() {
	return gulp.src('view/*.html')
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('dist/view'));
});

gulp.task('default',['jshint','uglify','htmlmin','cleanCSS']);

