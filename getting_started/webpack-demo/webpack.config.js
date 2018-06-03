const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),

};

const commonConfig = {

  entry: {

    app: PATHS.app,

  },
  output: {

    path: PATHS.build,
    filename: '[name].js',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Webpack demo',

    }),

  ],

};

const productionConfig = () => commonConfig;

const developmentConfig = () => {


  const config = {

    devServer: {

      historyApiFallback: true;
      status: 'errors-only',
      host: "0.0.0.0", // use env var process.env.HOST
      port: 8080,      // use env var process.env.PORT

    },

  };

  return Object.assign(
    
    {},
    commonConfig,
    config

  );

}

module.exports = (env) => {

  if(env === 'production'){
    
    return productionConfig();
    
  }

  return developmentConfig();
};
