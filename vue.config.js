// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const ifs = require('os').networkInterfaces();
const resolve = (dir) => path.join(__dirname, '..', dir);
const resolve_module = (dir) => path.join(__dirname, dir);
module.exports = {
  pages: {
    index: {
      entry   : ['./src/main.js'],
      template: './public/index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.join(__dirname, 'src/')
      }
    },
    module:{
      rules: [
        { 
          test: /\.js$/, 
          loader: 'babel-loader?cacheDirectory', 
          include: [resolve_module('/node_modules/vue-functional-calendar'), resolve_module('src'), resolve_module('test')] 
        }
      ]
    }
  },
  devServer: {
    host: (() => {
      let result = Object.keys(ifs)
        .map(x => ifs[x].filter(x => x.family === 'IPv4' && !x.internal)[0])
        .filter(x => x)[0].address;
      return result;
    })(),
    port: 8080
  },
  publicPath: '/baseTemplate',
  assetsDir : 'assets'
};