import React from 'react';
import styles from './SimpleWeather.module.css';
import {
	dayOfMonthHandle,
	dayOfWeekHandle,
	findMaxTemp,
	findMinTemp,
	kelvinToCelsius,
	monthHandle,
} from './SimpleWeatherFunctions';

function SimpleWeather({
						   weatherData,
						   activeDate,
						   dateProp,
						   handleToogleActive,
					   }) {
	const isActive = dateProp === activeDate;
	const toggleActive = () => {
		handleToogleActive(isActive ? null : dateProp);
	};

	const dayOfWeek = dayOfWeekHandle(dateProp);
	const dayOfMonth = dayOfMonthHandle(dateProp);
	const month = monthHandle(dateProp);
	const minTemperature = kelvinToCelsius(findMinTemp(weatherData));
	const maxTemperature = kelvinToCelsius(findMaxTemp(weatherData));
	const weatherIcon = `http://openweathermap.org/img/w/${weatherData[0].weather[0].icon}.png`;
	const weatherIconAlt = weatherData[0].weather[0].description;


	return (
		<div
			className={`${styles.simpleWeatherCard} ${isActive ? styles.activeTab : ''}`}
			onClick={toggleActive}
		>
			<p className={styles.mainFont}>{dayOfWeek}</p>
			<p className={styles.dayOfMonth}>{dayOfMonth}</p>
			<p className={styles.mainFont}>{month}</p>
			<img src={weatherIcon} alt={weatherIconAlt}/>
			<div className={styles.tempContainer}>
				<div className={styles.minTemp}>
					<div className={styles.tempLabel}>мин.</div>
					<div className={styles.tempValue}>{minTemperature}°</div>
				</div>
				<div className={styles.maxTemp}>
					<div className={styles.tempLabel}>макс.</div>
					<div className={styles.tempValue}>{maxTemperature}°</div>
				</div>
			</div>
		</div>
	);
}

export default SimpleWeather;
