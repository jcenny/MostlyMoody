 // let yearMoods = [];
  // let weatherDesc = [ 'weather-cloudy', 'weather-fog', 'weather-hail', 'weather-lightning', 'weather-lightning-rainy', 'weather-partlycloudy', 'weather-pouring', 'weather-rainy', 'weather-snowy', 'weather-snowy-rainy', 'weather-sunny', 'weather-windy', 'weather-windy-variant']
  // let moodLevel = 0;
  // let yearObj = {};
  // for (let i = 0; i < 365; i ++) {
  //   var randomWeatherIndex = Math.floor((Math.random() * 13));
  //   moodLevel = Math.floor((Math.random() * 10) + 1);
  //   yearObj = { mood: moodLevel, weather: weatherDesc[randomWeatherIndex]}
  //   yearMoods.push(yearObj);
  // }

  var yearMoods = [{ mood: 2, weather: "weather-pouring" }, { mood: 9, weather: "weather-hail" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-rainy" }, { mood: 10, weather: "weather-lightning" }, { mood: 3, weather: "weather-windy" }, { mood: 1, weather: "weather-snowy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-windy" }, { mood: 9, weather: "weather-pouring" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-lightning" }, { mood: 4, weather: "weather-cloudy" }, { mood: 5, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-rainy" }, { mood: 9, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 10, weather: "weather-rainy" }, { mood: 7, weather: "weather-snowy" }, { mood: 3, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-snowy" }, { mood: 6, weather: "weather-sunny" }, { mood: 3, weather: "weather-pouring" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-snowy" }, { mood: 6, weather: "weather-pouring" }, { mood: 7, weather: "weather-cloudy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-snowy" }, { mood: 2, weather: "weather-snowy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-pouring" }, { mood: 8, weather: "weather-sunny" }, { mood: 5, weather: "weather-fog" }, { mood: 10, weather: "weather-snowy" }, { mood: 2, weather: "weather-pouring" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 10, weather: "weather-fog" }, { mood: 10, weather: "weather-pouring" }, { mood: 8, weather: "weather-snowy" }, { mood: 6, weather: "weather-sunny" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-sunny" }, { mood: 9, weather: "weather-fog" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-hail" }, { mood: 7, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-sunny" }, { mood: 9, weather: "weather-hail" }, { mood: 5, weather: "weather-sunny" }, { mood: 8, weather: "weather-pouring" }, { mood: 1, weather: "weather-lightning" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-hail" }, { mood: 2, weather: "weather-snowy" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 2, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-cloudy" }, { mood: 5, weather: "weather-fog" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-fog" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-sunny" }, { mood: 4, weather: "weather-fog" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-rainy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-hail" }, { mood: 7, weather: "weather-windy" }, { mood: 7, weather: "weather-rainy" }, { mood: 3, weather: "weather-rainy" }, { mood: 3, weather: "weather-sunny" }, { mood: 6, weather: "weather-cloudy" }, { mood: 7, weather: "weather-rainy" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-fog" }, { mood: 4, weather: "weather-snowy" }, { mood: 8, weather: "weather-windy" }, { mood: 4, weather: "weather-sunny" }, { mood: 10, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-cloudy" }, { mood: 10, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-windy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-fog" }, { mood: 3, weather: "weather-windy" }, { mood: 4, weather: "weather-rainy" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-pouring" }, { mood: 9, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 4, weather: "weather-hail" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-snowy" }, { mood: 4, weather: "weather-sunny" }, { mood: 1, weather: "weather-rainy" }, { mood: 10, weather: "weather-windy" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-sunny" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-lightning" }, { mood: 3, weather: "weather-windy" }, { mood: 9, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-rainy" }, { mood: 7, weather: "weather-pouring" }, { mood: 9, weather: "weather-hail" }, { mood: 4, weather: "weather-pouring" }, { mood: 4, weather: "weather-fog" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-lightning" }, { mood: 3, weather: "weather-snowy" }, { mood: 6, weather: "weather-hail" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 9, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 7, weather: "weather-snowy" }, { mood: 9, weather: "weather-rainy" }, { mood: 5, weather: "weather-rainy" }, { mood: 6, weather: "weather-sunny" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning" }, { mood: 10, weather: "weather-rainy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-sunny" }, { mood: 8, weather: "weather-windy" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-hail" }, { mood: 10, weather: "weather-sunny" }, { mood: 1, weather: "weather-snowy-rainy" }, { mood: 3, weather: "weather-fog" }, { mood: 10, weather: "weather-pouring" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-hail" }, { mood: 4, weather: "weather-sunny" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-windy" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 1, weather: "weather-pouring" }, { mood: 4, weather: "weather-fog" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-fog" }, { mood: 9, weather: "weather-rainy" }, { mood: 3, weather: "weather-rainy" }, { mood: 8, weather: "weather-rainy" }, { mood: 4, weather: "weather-pouring" }, { mood: 1, weather: "weather-snowy" }, { mood: 9, weather: "weather-pouring" }, { mood: 3, weather: "weather-sunny" }, { mood: 6, weather: "weather-windy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-hail" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-snowy-rainy" }, { mood: 5, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-windy" }, { mood: 6, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-windy" }, { mood: 2, weather: "weather-cloudy" }, { mood: 8, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 6, weather: "weather-lightning" }, { mood: 7, weather: "weather-lightning" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 7, weather: "weather-windy" }, { mood: 10, weather: "weather-pouring" }, { mood: 7, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-sunny" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-snowy" }, { mood: 1, weather: "weather-windy" }, { mood: 2, weather: "weather-snowy" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-fog" }, { mood: 5, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-hail" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 3, weather: "weather-cloudy" }, { mood: 4, weather: "weather-hail" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-sunny" }, { mood: 7, weather: "weather-rainy" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-fog" }, { mood: 3, weather: "weather-cloudy" }, { mood: 2, weather: "weather-hail" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-rainy" }, { mood: 4, weather: "weather-windy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-cloudy" }, { mood: 10, weather: "weather-windy" }, { mood: 4, weather: "weather-hail" }, { mood: 2, weather: "weather-hail" }, { mood: 4, weather: "weather-snowy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-sunny" }, { mood: 1, weather: "weather-hail" }, { mood: 3, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-pouring" }, { mood: 10, weather: "weather-snowy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 5, weather: "weather-windy" }, { mood: 8, weather: "weather-pouring" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-fog" }, { mood: 2, weather: "weather-hail" }, { mood: 6, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-snowy" }, { mood: 3, weather: "weather-pouring" }, { mood: 9, weather: "weather-cloudy" }, { mood: 6, weather: "weather-windy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-cloudy" }, { mood: 10, weather: "weather-pouring" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 2, weather: "weather-fog" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-windy" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-fog" }, { mood: 1, weather: "weather-lightning" }, { mood: 2, weather: "weather-windy-variant" }, { mood: 4, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning" }, { mood: 8, weather: "weather-snowy" }, { mood: 10, weather: "weather-snowy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 1, weather: "weather-fog" }, { mood: 1, weather: "weather-snowy" }, { mood: 4, weather: "weather-fog" }, { mood: 1, weather: "weather-lightning" }, { mood: 1, weather: "weather-windy" }, { mood: 1, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-pouring" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-fog" }, { mood: 1, weather: "weather-sunny" }, { mood: 3, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 7, weather: "weather-hail" }, { mood: 9, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy" }, { mood: 7, weather: "weather-sunny" }, { mood: 6, weather: "weather-sunny" }, { mood: 3, weather: "weather-sunny" }, { mood: 2, weather: "weather-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 6, weather: "weather-windy" }, { mood: 9, weather: "weather-snowy" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-pouring" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 1, weather: "weather-cloudy" }, { mood: 5, weather: "weather-pouring" }, { mood: 4, weather: "weather-hail" }, { mood: 2, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy-variant" }, { mood: 5, weather: "weather-windy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-snowy" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-rainy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-lightning" }, { mood: 1, weather: "weather-sunny" }, { mood: 3, weather: "weather-fog" }, { mood: 5, weather: "weather-hail" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 10, weather: "weather-hail" }, { mood: 1, weather: "weather-hail" }, { mood: 3, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-cloudy" }, { mood: 10, weather: "weather-sunny" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-cloudy" }, { mood: 4, weather: "weather-lightning" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-hail" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-fog" }, { mood: 8, weather: "weather-cloudy" }, { mood: 1, weather: "weather-pouring" }, { mood: 6, weather: "weather-pouring" }, { mood: 1, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-fog" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-lightning" }, { mood: 1, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-sunny" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-cloudy" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-sunny" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-windy" }, { mood: 5, weather: "weather-snowy" }, { mood: 5, weather: "weather-snowy" }, { mood: 7, weather: "weather-hail" }, { mood: 9, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-hail" }, { mood: 4, weather: "weather-rainy" }, { mood: 5, weather: "weather-lightning" }, { mood: 4, weather: "weather-windy" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-rainy" }, { mood: 3, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-snowy" }, { mood: 4, weather: "weather-pouring" }, { mood: 3, weather: "weather-snowy" } ];

  export default yearMoods;