import { textAction, listAction, listActionFive, weatherFirst, weatherSecond, weatherThird, weatherFourth, weatherFifth, weatherFirstDay, weatherSecondDay, weatherThirdDay, weatherFourthDay, weatherFifthDay } from "../actions";

const getWeatherDay = (city) => async dispatch => {
    
    let selectedCity = `${city}`
    const appid = 'b8a737339760b9c623f0dda9e7b8b336'   
    let countryCode = "";
    if (selectedCity == "Minsk") {
        countryCode = "BY"
    } else if (selectedCity == "Moskva") {
        countryCode = "RU"
    } else {
        countryCode = "UA"
    }
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&APPID=${appid}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch({type: "CHANGE_CITY", payload: city});
            const currentWeather = {
                temperature: `${Math.round(data.main.temp - 273.15)}°C`,
                wind: `${data.wind.speed}km/h`,
                icon: `${data.weather[0].icon}`
            }
            dispatch({type: "TAKE_LIST", payload: currentWeather});
        }).catch(function() {
            console.log(Error);
        })
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity},${countryCode}&APPID=${appid}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            const weatherFive = [];
            const list = data.list;
            for(let i=0; i < list.length; i++) {
                weatherFive.push({
                    id: i,
                    temperature: `${Math.round(list[i].main.temp - 273.15)}`,
                    pressure: `${list[i].main.pressure}`,
                    wind: `${list[i].wind.speed} км/ч`,
                    time: `${list[i].dt_txt}`,
                    icon: `${list[i].weather[0].icon}`
                })
            }
            dispatch({type: "TAKE_LIST_FIVE", payload: weatherFive});

            let weatherFirst = []
            let weatherSecond = []
            let weatherThird = []
            let weatherFourth = []
            let weatherFifth = []
          
            for(let i = 0; i < weatherFive.length; i++) {
                const weatherDate = new Date(weatherFive[i].time).getDate()
                if(weatherDate == new Date(weatherFive[0].time).getDate()) {
                    weatherFirst.push(weatherFive[i])
                }
                if(weatherDate == (new Date(weatherFive[0].time).getDate() + 1)) {
                    weatherSecond.push(weatherFive[i])
                }
                if(weatherDate == (new Date(weatherFive[0].time).getDate() + 2)) {
                    weatherThird.push(weatherFive[i])
                }
                if(weatherDate == (new Date(weatherFive[0].time).getDate() + 3)) {
                    weatherFourth.push(weatherFive[i])
                }
                if(weatherDate == (new Date(weatherFive[0].time).getDate() + 4)) {
                    weatherFifth.push(weatherFive[i])
                }
            }
            
            dispatch({type: "WEATHER_FIRST", payload: weatherFirst});
            dispatch({type: "WEATHER_SECOND", payload: weatherSecond});
            dispatch({type: "WEATHER_THIRD", payload: weatherThird});
            dispatch({type: "WEATHER_FOURTH", payload: weatherFourth});
            dispatch({type: "WEATHER_FIFTH", payload: weatherFifth});

            let weatherFirstDay = []
            let weatherSecondDay = []
            let weatherThirdDay = []
            let weatherFourthDay = []
            let weatherFifthDay = []


            let temp = 0
            for(let a = 0; a < weatherFirst.length; a++) {
                temp = temp + +weatherFirst[a].temperature
                const date = new Date(weatherFirst[0].time).toLocaleString('default', {month: 'short', day: 'numeric'})
                weatherFirstDay.push({
                    id: a,
                    averageTemp: `${Math.round((temp / weatherFirst.length))}°С`,
                    date
                })
            }
            let temp2 = 0
            for(let b = 0; b < weatherSecond.length; b++) {
                temp2 = temp2 + +weatherSecond[b].temperature
                const date = new Date(weatherSecond[0].time).toLocaleString('default', {month: 'short', day: 'numeric'})
                weatherSecondDay.push({
                    id: b,
                    averageTemp: `${Math.round((temp2 / weatherSecond.length))}°С`,
                    date
                })
            }
            let temp3 = 0;
            for(let c = 0; c < weatherThird.length; c++) {
                temp3 = temp3 + +weatherThird[c].temperature
                const date = new Date(weatherThird[0].time).toLocaleString('default', {month: 'short', day: 'numeric'})
                weatherThirdDay.push({
                    id: c,
                    averageTemp: `${Math.round((temp3 / weatherThird.length))}°С`,
                    date
                })
            }
            let temp4 = 0;
            for(let d = 0; d < weatherFourth.length; d++) {
                temp4 = temp4 + +weatherFourth[d].temperature
                const date = new Date(weatherFourth[0].time).toLocaleString('default', {month: 'short', day: 'numeric'})
                weatherFourthDay.push({
                    id: d,
                    averageTemp: `${Math.round((temp4 / weatherFourth.length))}°С`,
                    date
                })
            }
            let temp5 = 0;
            for(let e = 0; e < weatherFifth.length; e++) {
                temp5 = temp5 + +weatherFifth[e].temperature
                const date = new Date(weatherFifth[0].time).toLocaleString('default', {month: 'short', day: 'numeric'})
                weatherFifthDay.push({
                    id: e,
                    averageTemp: `${Math.round((temp5 / weatherFifth.length))}°С`,
                    date
                })
            }

            dispatch({type: "WEATHER_FIRST_DAY", payload: weatherFirstDay.pop()});
            dispatch({type: "WEATHER_SECOND_DAY", payload: weatherSecondDay.pop()});
            dispatch({type: "WEATHER_THIRD_DAY", payload: weatherThirdDay.pop()});
            dispatch({type: "WEATHER_FOURTH_DAY", payload: weatherFourthDay.pop()});
            dispatch({type: "WEATHER_FIFTH_DAY", payload: weatherFifthDay.pop()});

        }).catch(function() {
            console.log(Error);
        })
};

export default getWeatherDay;

