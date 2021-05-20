//暴露接口
module.exports = {
    resolve:{
        extensions:['.js','es'],
        alias:{
            vue:'/node_modules/vue/dist/vue.js'
        }
    },
    //入口文件
    entry:{
        "03": "./modules/03.js",
        "04": "./modules/04.js",
        
        "05": "./modules/05.js",
        "06": "./modules/06.js",
        "07": "./modules/07.js",
        // "08": "./modules/08.js",
        // "09": "./modules/09.js",
        // "10": "./modules/10.js",
        // "11": "./modules/11.js",
        // "12": "./modules/12.js",
        // "13": "./modules/13.js",
        // "14": "./modules/14.js",
    },
    output:{
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules',
                include: '/modules',

                options:{
                    presets:['env']
                }
            },
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    mode:'development'
}