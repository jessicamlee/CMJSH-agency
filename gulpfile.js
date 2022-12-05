const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');

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
    watch('./src/js/**/*.js', build_app);
}

exports.default = series(build_app, watchTasks);