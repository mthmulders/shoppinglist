var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var compass = require('gulp-compass');
var path = require('path');
var templates = require('gulp-angular-templatecache');

// Minify / uglify application Javascript code
gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(['./app/scripts/**/*.js', '.tmp/js/templates.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./.tmp/js'));
});

// Copy all static images
gulp.task('images', function() {
    return gulp.src('./app/images/**')
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./build/img'));
});

// Compile stylesheets
gulp.task('compass', function() {
    gulp.src('./app/styles/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'app'),
            sass: 'styles',
            css: '.tmp/css',
            javascript: './.tmp/js',
            import_path: 'bower_components',
            style: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
});

// Replace minified css and js
gulp.task('usemin', function() {
    gulp.src('./app/index.html')
        .pipe(usemin({
            cssmin: true,
            htmlmin: true,
            jsmin: true
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('templateCache', function() {
    gulp.src('./app/views/*.html')
        .pipe(templates('templates.js'))
        .pipe(gulp.dest('./.tmp/js'));
});

gulp.task('default', ['templateCache', 'scripts', 'compass', 'images', 'usemin']);