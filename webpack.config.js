module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	devtool: "source-map",
	devServer: {
		contentBase: './dist',
		port: '8000',
		inline: true,
		historyApiFallback: true
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	}
}