const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sourcemap = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function hello(done){
    console.log("Hello");
    done();
}

//конвертация scss в scc:
function cssStyle(done) {
    gulp.src("./src/style/**/*.scss") //откуда взять
        .pipe(sourcemap.init()) //связывает минифицированный файл с исходным файлом
        .pipe(sass({ //вызов переменной для sass
            outputStyle: "compressed" //сжатие
        }))
        .pipe(autoprefixer({//библиотека для добавления префиксов (для кроссбраузерности)
            overrideBrowserslist: ["last 2 versions"], //чтобы браузер поддерживал две последние версии
            cascade: false //если файл уже минифицирован, то false - в каскаде не прописывается (по умолчанию true)
        }))
        .pipe(rename({ suffix: ".min" })) //добавление имени сжатому файлу
        .pipe(sourcemap.write("./"))
        .pipe(gulp.dest("./dist/style/")) //куда положить
        .pipe(browserSync.stream()); //для автоматической перезагрзки страницы
    done();
}

function watchFiles() { //что должно обновляться при перезагрузке страницы
    gulp.watch("./src/style/**/*", cssStyle);
    gulp.watch("./*.html", browserReload);
    gulp.watch("./src/**/*.js", browserReload);
}

function browserReload(done) { //реализация перезагрузки
    browserSync.reload();
    done();
}

function sync(done) { //открывать сайт по созданному урлу
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

gulp.task("default", gulp.parallel(sync, watchFiles)); //параллельное выполнение функций