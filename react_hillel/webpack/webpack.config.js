const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//создаем сущность
const conf = { //объект - настройка по webpack
    entry: "./src/index.js", //входящтй файл для сборки
    output: {
        path: path.resolve(__dirname, "dist"),//куда положить файл, абсолютный путь. Переменная __dirname указывает на проект, где мы находимся
        filename: "bundle.js", //добавляем новое имя файлу (можно удалить main.js)
        publicPath: "dist/" 
    },
    devServer: { //чтобы выводить ошибки на страницу, а не в консоль
        overlay: true
    },
    devtool: "eval-sourcemap", //sourcemap используется только в development
    module: { //работа с правилами
        rules: [
            {
                test: /\.js$/, //строка на распознавание расширения файла, которые неоходимо обрабатывать
                loader: "babel-loader" //что использовать для этих (.js) файлов
            },
            { //перевод из sass в scc
                test:  /\.scss$/, //регулярка
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"] //массив лоадеров, которые неоходимо применить
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin ("style.css") //файл, который будет сгенерирован
    ]
};

//экспортим сущьность
module.exports = (env, options) => {
    let isProd = options.mode === "production";

    conf.devtool = isProd
        ? false
        : 'eval-sourcemap';

    return conf;
};