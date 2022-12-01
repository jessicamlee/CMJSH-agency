const { src, dest, watch, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function build_js() {
    return src([
            './src/js/aos.js', 
            './src/js/main.js',])
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(concat({ path: 'main.js'}))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/js/'));
};

function build_app() {
    return src(["src/app.js"])
        .pipe(babel({
            presets:[
                "@babel/preset-react",
                "@babel/preset-env",
            ],
        }))
        .pipe(dest('./dist'));
};

function watchTasks() {
    watch('./src/js/**/*.js', build_js, build_app);
}

exports.default = series(build_js, build_app, watchTasks);