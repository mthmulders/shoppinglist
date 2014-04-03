var bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify');

var paths = {
    scripts: ['src/**/*.js'],
    libs: ['vendor/!(jquery)/*.min.js'],
    styles: ['vendor/bootswatch/spacelab/*.min.css'],
    assets: ['src/index.html']
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
