var gulp = require('gulp');

gulp.task('minify', minify);

function minify(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    var rename = require('gulp-rename');
    var size = require('gulp-size');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(rename({suffix: '.min'}))
        .pipe(size())
        .pipe(gulp.dest('dist/'));
    done();
}

gulp.task('watch', function(){
    gulp.watch('src/*.css', gulp.series('minify'));
});

gulp.task('default', minify);