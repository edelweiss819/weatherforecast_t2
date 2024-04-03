import React, {useEffect, useState} from 'react';
import {owmApiKey} from '../../api_keys/owmApiKey.js';
import {owmJsonConverter} from '../../functions/owmJsonConverter';


function SearchForm(props) {
	const [cityName, setCityName] = useState('London');
	const [weatherData, setWeatherData] = useState(null);
	const fetchWeatherData = async () => {
		try {
			const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${owmApiKey}`);
			const geoResult = await geoResponse.json();
			console.log(geoResult);
			const lat = (geoResult[0].lat);
			const lon = (geoResult[0].lon);
			const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${owmApiKey}`);
			const uncovertedWeatherData = await weatherResponse.json();
			const weatherData = owmJsonConverter(uncovertedWeatherData);
			console.log(weatherData);
			setWeatherData(weatherData);
			props.updateWeatherData(weatherData);
		} catch (error) {
			console.log('Ошибка в получение погоды.', error);
		}
	}
	const handleFormSubmit = (event) => {
		event.preventDefault();
		fetchWeatherData();
	}
	const handleInputChange = (event) => {
		setCityName(event.target.value)
	}

	useEffect(() => {
		document.title = `Погода в ${cityName}`;
	}, [cityName]);
	return (
		<form><label htmlFor="cityName">Введите город:</label>
			<input type="text" id="cityName" name="cityName" value={cityName}
				   onChange={handleInputChange}/>
			<button onClick={handleFormSubmit}>Отправить</button>
		</form>
	);
}

export default SearchForm;