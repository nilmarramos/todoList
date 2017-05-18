const webpack = require('webpack')
const ExtractTextplugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname +'/public',
		filename: './app.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	},
	resolve: {
		alias: {
			modules: __dirname + '/node_modules'
		}
	},
	plugins: [
		new ExtractTextplugin('app.css')
	],
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextplugin.extract('style-loader', 'css-loader')
		}, {
			test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
			loader: 'file'
		}]
	}
}