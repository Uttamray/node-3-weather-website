const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=55c0b88ab8c629a0e1d8d4b9ed2f8bfc&query=' + latitude + ',' + longitude + '&units=f'
    //request({url: url, json: true }, (error, response) => {  //shorthand and destructure es-6
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {  //else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is crurrently ' + body.current.temperature + 
        ' degrees out. It feels like ' + body.current.feelslike +' degrees out. Humidity is ' + body.current.humidity +'%.')
        }
    })
}

module.exports = forecast