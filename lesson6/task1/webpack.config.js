module.exports ={
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/.css$/,
                use:['style-loader','css-loader']
            },

            {
                test:/.(jpg|png)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192,
                        name: '[name].[ext]',
                        outputPath: 'images',
                      },
                    },
                  ],
            }
        ],
    }
}
