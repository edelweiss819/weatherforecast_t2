import React from 'react';
import styles from './SimpleCardBlock.module.css';
import SimpleWeather from './SimpleWeather/SimpleWeather';

function SimpleCardBlock({
							 weatherData,
							 activeDate,
							 setActiveDate,
							 handleToggleActive,
						 }) {


	if (!weatherData) {
		return <p>Нет данных о погоде.</p>;
	}

	const firstFiveDates = Object.entries(weatherData).slice(0, 5);

	return (
		<div className={styles.simpleCardBlock}>
			{firstFiveDates.map(([date, data]) => (
				<SimpleWeather
					key={date}
					dateProp={date}
					weatherData={data}
					activeDate={activeDate} // Передача активной даты
					setActiveDate={setActiveDate} // Передача функции для установки активной даты
					handleToogleActive={handleToggleActive}
				/>
			))}
		</div>
	);
}

export default SimpleCardBlock;
