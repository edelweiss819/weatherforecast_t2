import React, {useEffect, useState} from 'react';
import styles from './DetailedWeather.module.css';
import {
	dayOfMonthHandle,
	dayOfWeekHandle,
	monthHandle,
} from '../SimpleCardBlock/SimpleWeather/SimpleWeatherFunctions';
import DetailedWeatherTable from './DetailedWeatherTable/DetailedWeatherTable';

function DetailedWeather({
							 weatherData,
							 activeDate,
						 }) {
	const [currentActiveDate, setCurrentActiveDate] = useState(null);


	useEffect(() => {
		setCurrentActiveDate(activeDate);
	}, [activeDate]);


	if (currentActiveDate === null) {
		return <p></p>;
	}

	const activeWeatherData = weatherData[currentActiveDate] || null;

	if (activeWeatherData === null) {
		return <p>Нет данных для выбранной даты.</p>;
	}


	const dayOfWeek = dayOfWeekHandle(currentActiveDate);
	const dayOfMonth = dayOfMonthHandle(currentActiveDate);
	const month = monthHandle(currentActiveDate);


	return (
		<div className={styles.detailedWeatherBlock}>
			<div className={styles.simpleWeatherBlock}><p
				className={styles.main}>{dayOfWeek}</p>
				<p className={styles.dayOfMonth}>{dayOfMonth}</p>
				<p className={styles.main}>{month}</p>
			</div>
			<DetailedWeatherTable activeWeatherData={activeWeatherData}/>
		</div>
	);
}

export default DetailedWeather;

