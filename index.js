const chalk = require('chalk');
const geoCode = require('./utils/geocoding');
const getweatherInfo = require('./utils/WeatherInfo')

const geoCodeCallback = (error,{full_add:address,longitude,latitude})=>{
  if(error)
  {
    return console.log( chalk.red(error));
  }
  getweatherInfo(longitude,latitude,(error,{temp:temperatue,feellike,weather_des})=>{
    if(error)
    {
      return console.log( chalk.red(error));
    }
    console.log(chalk.green(address));
    console.log(chalk.green(`Today is ${weather_des}. Temperature is ${temperatue}(degree) and feels like temperatue is ${feellike}.`))
  })

}
//Process is used to get command line arguments.
if(! process.argv[2])
{
  return console.log( chalk.red('add the location to end of the command'))
}
geoCode(process.argv[2],geoCodeCallback)











