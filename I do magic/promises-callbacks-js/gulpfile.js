// Import Gulp and Plumber
var gulp = require('gulp');

// SASS compilation task
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

var DIST = 'dist';

var dist = function(subpath) {
	return !subpath ? DIST : path.join(DIST, subpath);
};

gulp.task('sass', function () {
	gulp.src(['./src/css/header.scss','./src/css/body-top.scss'
					, './src/css/body.scss', './src/css/footer.scss', './src/css/grid.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist'));
});

// BrowserSync serve task
var browser = require('browser-sync');
var reload = browser.reload;
gulp.task('serve', function () {
	browser({
		port: 4500,
		open: false,
		ghostMode: false,
		server: {
			baseDir: './dist'
		}
	});
});

// Watch task
gulp.task('watch', function () {
	gulp.watch("./src/css/**", ['sass']);
	gulp.watch("./src/html/**", ['html']);
	gulp.watch("./src/images/**", ['copyImages']);
	gulp.watch("./src/js/**", ['copyJsFiles']);
});

// HTML generation task
// var fs = require("fs");
// var inject = require('gulp-inject-string');
gulp.task('html', function () {
	// var cssContent = fs.readFileSync("./dist/main.css", "utf8");
	gulp.src("./src/html/*.html")
		// .pipe(inject.after('style amp-custom>', cssContent))
		.pipe(gulp.dest("./dist"))
		.pipe(reload({
			stream: true
		}));
});

// Copy all assets at the root level (app)
gulp.task('copyImages', function() {
	gulp.src([
		'./src/images/*',
	]).pipe(gulp.dest("./dist/images"))
	.pipe(reload({
		stream: true
	}));
});

// Copy all javascript files at the root level (app)
gulp.task('copyJsFiles', function() {
	gulp.src([
		'./src/js/*',
	]).pipe(gulp.dest("./dist/js"))
	.pipe(reload({
		stream: true
	}));
});

// Default task
gulp.task('default', ['sass', 'html', 'watch', 'serve', 'copyImages', 'copyJsFiles']);