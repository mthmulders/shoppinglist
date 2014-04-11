var bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    protractor = require("gulp-protractor").protractor,
    uglify = require('gulp-uglify');

var paths = {
    assets: ['src/index.html'],
    libs: ['vendor/!(jquery)/*.min.js'],
    scripts: ['src/**/*.js'],
    styles: ['vendor/bootswatch/spacelab/*.min.css'],
    tests: ['test/**/*.js']
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('../resources/app/js'));
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('../resources/app/css'));
});

gulp.task('libs', function() {
    return gulp.src(paths.libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('../resources/app/js'));
});

gulp.task('test', function() {
    return gulp.src(paths.tests)
        .pipe(protractor({
            configFile: "test/protractor.config.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) { throw e });
});

gulp.task('bower', function() {
    return bower().pipe(gulp.dest('vendor'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['bower', 'libs', 'scripts', 'styles'], function() {
    return gulp.src(paths.assets)
        .pipe(gulp.dest('../resources/app/'));
});
