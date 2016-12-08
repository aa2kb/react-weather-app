module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    root : __dirname,
    alias : {
      Main : 'components/main.jsx',
      Nav : 'components/nav.jsx',
      Weather : 'components/weather.jsx',
      WeatherFrom : 'components/weather/weather-form.jsx',
      WeatherMessage : 'components/weather/weather-message.jsx',
      About : 'components/about.jsx',
      Example : 'components/examples.jsx',
      openWeather : 'api/openweathermap.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ],
  },
  devtool : 'cheap-eval-source-map'
};
