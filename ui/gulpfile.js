
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var using = require('gulp-using');
var pump = require('pump');

// Paths

var src_path = Array();
var src_dir = 'src'
var src = type => src_dir + src_path[type];

var dest_path = Array();
var dest_dir = 'dist'
var dest = type => dest_dir + dest_path[type];

// JavaScript => Lint + Concat + Uglify
src_path['js'] = '/js/**/*.js';
dest_path['js'] = '/js';

// Less => CSS + Autoprefix + Minify
src_path['less'] = '/less/**/*.less';
dest_path['less'] = '/css';

src_path['css'] = '/less/**/*.css';
dest_path['css'] = '/css';

// Settings
var using_input_opts = { prefix: 'Using file', path: 'relative', color: 'yellow', filesize: true };
var using_output_opts = { prefix: 'Writing file', path: 'relative', color: 'red', filesize: true };
var AdminLTE_skin = 'green';

gulp.task('lint', function () {
    return gulp.src(src('js'))
        .pipe(using(using_input_opts))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('less:app', function () {
    return gulp.src([
        // include all from app
        'src/less/app/**/*.less'])
        // process
        .pipe(using(using_input_opts))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(using(using_output_opts))
        .pipe(gulp.dest(dest('less')));
});

gulp.task('less', ['less:app'], function () {
    return gulp.src([
        // include all from less source dir
        src('less'),
        src('css'),
        // exclude app - css is loaded with SystemJS
        '!src/less/app/**/',
        // exclude bootstrap
        '!src/less/bootstrap/**/',
        // exclude everything from admin-lte except main file
        '!src/less/admin-lte/!(AdminLTE.less)',
        // include skin
        '!src/less/admin-lte/skins/!(skin-' + AdminLTE_skin + '.less)'])
        // process
        .pipe(using(using_input_opts))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat('hemi.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(using(using_output_opts))
        .pipe(gulp.dest(dest('less')));
});

gulp.task('scripts', ['lint'], function () {
    return gulp.src(src('js'))
        .pipe(using(using_input_opts))
        .pipe(sourcemaps.init())
        .pipe(concat('hemi.min.js'))
        // .pipe(gulp.dest(dest('js')))
        // .pipe(rename('hemi.min.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(using(using_output_opts))
        .pipe(gulp.dest(dest('js')));
});

gulp.task('watch', function () {
    gulp.watch([src('scripts')], ['scripts']);
    gulp.watch([src('less'), src('css')], ['less']);
});

gulp.task('default', ['less', 'scripts', 'watch']);