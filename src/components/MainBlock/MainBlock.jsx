import React, {useEffect, useState} from 'react';
import SimpleCardBlock from './SimpleCardBlock/SimpleCardBlock';
import styles from './MainBlock.module.css';
import DetailedWeather from './DetailedWeather/DetailedWeather';

function MainBlock({weatherData, cityName}) {
	const [activeDate, setActiveDate] = useState(null);

	useEffect(() => {
		if (weatherData && Object.keys(weatherData).length > 0) {
			const firstDate = Object.keys(weatherData)[0];
			setActiveDate(firstDate);
		}
	}, [weatherData]);

	const handleToggleActive = (date) => {
		setActiveDate(date);
	};

	if (weatherData === null) {
		return <p>Loading...</p>;
	}

	return (
		<div className={styles.mainBlock}>

			<h1 className={styles.weatherCityMessage}>{cityName}</h1>
			<SimpleCardBlock
				weatherData={weatherData}
				activeDate={activeDate}
				setActiveDate={setActiveDate}
				handleToggleActive={handleToggleActive}
			/>
			<DetailedWeather
				weatherData={weatherData}
				activeDate={activeDate}
				setActiveDate={setActiveDate}
			/>
		</div>
	);
}

export default MainBlock;
