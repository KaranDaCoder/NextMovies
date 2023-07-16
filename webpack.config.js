module: {
 rules: [
  {
   test: /\.css/,
   use: [
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    'css-loader',
   ],
  },
 ] // end rules
}