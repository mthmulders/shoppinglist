var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var usemin = require('gulp-usemin');
var compass = require('gulp-compass');
var path = require('path');
var templates = require('gulp-angular-templatecache');
var clean = require('gulp-clean');
var minifyHTML = require('gulp-minify-html');

gulp.task('clean', function() {
    return gulp.src(['build', 'tmp', 'app/scripts/templates.js'], {read: false})
        .pipe(clean());
});

// Minify / uglify application Javascript code
gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(['./app/scripts/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('./tmp/scripts'));
});

// Copy all static images
gulp.task('images', function() {
    return gulp.src('./app/images/**')
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('../server/api/src/main/webapp/img'));
});

// Compile stylesheets
gulp.task('compass', function() {
    gulp.src('./app/styles/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'app'),
            sass: 'styles',
            css: 'build/css',
            javascript: './tmp/js',
            import_path: 'bower_components',
            style: 'compressed'
        }))
        .pipe(gulp.dest('../server/api/src/main/webapp/styles'));
});

// Replace minified css and js
gulp.task('usemin', function() {
    gulp.src('./app/index.html')
        .pipe(usemin({
            cssmin: true,
            htmlmin: true,
            jsmin: true
        }))
        .pipe(gulp.dest('../server/api/src/main/webapp'));
});

// Create a template cache module
gulp.task('templates', function() {
    gulp.src('./app/views/*.html')
        .pipe(minifyHTML({ quotes: true }))
        .pipe(templates('templates.js'))
        .pipe(gulp.dest('../server/api/src/main/webapp/scripts'));
});

gulp.task('default', ['templates', 'scripts', 'compass', 'images', 'usemin']);
