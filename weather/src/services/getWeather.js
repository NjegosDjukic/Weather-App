import axios from 'axios';

export const getCurrentDayWeather = async() => {
        return await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=45.267136&lon=19.833549&units=metric&appid=f34f51bb1d514837176eaefd709b0af7")
}
export const getWeekForecast = async() => {
        return await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=45.267136&d/M/yyyy&lon=19.833549&units=metric&appid=f34f51bb1d514837176eaefd709b0af7")
}
