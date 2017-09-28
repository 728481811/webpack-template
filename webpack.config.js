module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	devtool: "source-map",
	devServer: {
		contentBase: './dist',
		port: '1000',
		inline: true,
		historyApiFallback: true
	}
}