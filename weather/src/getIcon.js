export const getIcon = (icon) => {
    switch(icon){
        case('01d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/clear-day.svg'
        case('01n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/clear-night.svg'
        case('02d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/partly-cloudy-day.svg'
        case('02n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/cloudy-night-3.svg'
        case('04d'): 
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/cloudy.svg'
        case('09d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/rain.svg'
        case('09n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/rainy-1-night.svg'
        case('11d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/thunder.svg'
        case('13d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/snowy-6.svg'  
        case('50d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/fog.svg'
        case('03d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/cloudy.svg'
        case('03n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/cloudy.svg'    
        case('04n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/cloudy.svg'
        case('10d'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/rain.svg'
        case('10n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/rainy-1-night.svg'
            case('50n'):
            return 'https://raw.githubusercontent.com/Makin-Things/weather-icons/357678d840e7eb5410a40d2dd68eb20ae972dfee/original/static/fog.svg'
        default:
            return null
        }
}