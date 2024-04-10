import React, {useEffect, useState} from 'react';
import {owmApiKey} from '../../api_keys/owmApiKey';
import {owmJsonConverter} from '../../functions/owmJsonConverter';
import styles from './SearchForm.module.css';

function SearchForm({
						setWeatherData,
						updateWeatherData,
						cityName,
						setCityName,
						updateCityName,
					}) {
	const [citySuggestions, setCitySuggestions] = useState([]);

	const fetchCitySuggestions = async (cityName) => {
		try {
			const response = await fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${owmApiKey}&lang=ru`,
			);
			const data = await response.json();
			console.log(data);
			const suggestions = data.map((item) => ({
				label: `${item.local_names?.ru || item.name}, ${item.country}`,
				value: `${item.name}, ${item.country}`,
			}));
			setCitySuggestions(suggestions);
		} catch (error) {
			console.log('Ошибка при получении предложений.', error);
		}
	};

	const fetchWeatherData = async (city) => {
		try {
			const geoResponse = await fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${owmApiKey}&lang=ru`,
			);
			const geoResult = await geoResponse.json();
			const lat = geoResult[0].lat;
			const lon = geoResult[0].lon;
			const weatherResponse = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${owmApiKey}&lang=ru`,
			);
			const unconvertedWeatherData = await weatherResponse.json();
			const weatherData = owmJsonConverter(unconvertedWeatherData);
			setWeatherData(weatherData);
			updateWeatherData(weatherData);
		} catch (error) {
			console.log('Ошибка в получении погоды.', error);
		}
	};

	useEffect(() => {
		// Проверяем, выбран ли уже город (если cityName не пустое)
		if (cityName) {
			fetchWeatherData(cityName); // Выполняем запрос погоды только если город выбран
		}
	}, [cityName]);

	const handleInputChange = (event) => {
		const value = event.target.value;
		setCityName(value);
		updateCityName(value); // Отправляем cityName в родительский компонент
		fetchCitySuggestions(value); // Получаем предложения по введенному городу
	};

	useEffect(() => {
		document.title = `Погода в ${cityName}`;
	}, [cityName]);

	return (
		<form>
			<label htmlFor="cityName"></label>
			<input className={styles.inputForm}
				   type="text"
				   id="cityName"
				   name="cityName"
				   value={cityName}
				   onChange={handleInputChange}
				   list="citySuggestions"
			/>
			<datalist id="citySuggestions">
				{citySuggestions.map((city, index) => (
					<option key={index} value={city.value}>
						{city.label}
					</option>
				))}
			</datalist>
		</form>
	);
}

export default SearchForm;
