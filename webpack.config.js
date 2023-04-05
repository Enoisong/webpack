plugins: [
    new HtmlWebpackPlugin({    
     template: './src/index.html',
    }),
  ]; 
 
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      }
    ]
  }
  