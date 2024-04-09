import React from 'react';
import {
	kelvinToCelsius,
} from '../../SimpleCardBlock/SimpleWeather/SimpleWeatherFunctions';
import styles from './DetailedWeatherTable.module.css';

function DetailedWeatherTable({activeWeatherData}) {
	// Фильтруем данные о погоде по временам суток
	const nightData = activeWeatherData.find(data => data.dt_txt.includes('03:00:00'));
	const morningData = activeWeatherData.find(data => data.dt_txt.includes('12:00:00'));
	const dayData = activeWeatherData.find(data => data.dt_txt.includes('18:00:00'));
	const eveningData = activeWeatherData.find(data => data.dt_txt.includes('21:00:00'));
	return (
		<div className={styles.detailedWeatherTable}>
			<table className={styles.weatherTable}>
				<tbody>
				<tr>
					<td className={styles.timeOfDay}></td>
					<td className={styles.timeOfDay}>Ночь<br/>3:00</td>
					<td className={styles.timeOfDay}>Утро<br/>12:00</td>
					<td className={styles.timeOfDay}>День<br/>18:00</td>
					<td className={styles.timeOfDay}>Вечер<br/>21:00</td>
				</tr>
				<tr>
					<td className={styles.parameter}>Температура (°C)</td>
					<td>{nightData ? kelvinToCelsius(nightData.main.temp) : '-'}</td>
					<td>{morningData ? kelvinToCelsius(morningData.main.temp) : '-'}</td>
					<td>{dayData ? kelvinToCelsius(dayData.main.temp) : '-'}</td>
					<td>{eveningData ? kelvinToCelsius(eveningData.main.temp) : '-'}</td>
				</tr>
				<tr>
					<td className={styles.parameter}>Давление (hPa)</td>
					<td>{nightData ? nightData.main.pressure : '-'}</td>
					<td>{morningData ? morningData.main.pressure : '-'}</td>
					<td>{dayData ? dayData.main.pressure : '-'}</td>
					<td>{eveningData ? eveningData.main.pressure : '-'}</td>
				</tr>
				<tr>
					<td className={styles.parameter}>Влажность (%)</td>
					<td>{nightData ? nightData.main.humidity : '-'}</td>
					<td>{morningData ? morningData.main.humidity : '-'}</td>
					<td>{dayData ? dayData.main.humidity : '-'}</td>
					<td>{eveningData ? eveningData.main.humidity : '-'}</td>
				</tr>
				<tr>
					<td className={styles.parameter}>Ветер (м/с)</td>
					<td>{nightData ? nightData.wind.speed : '-'}</td>
					<td>{morningData ? morningData.wind.speed : '-'}</td>
					<td>{dayData ? dayData.wind.speed : '-'}</td>
					<td>{eveningData ? eveningData.wind.speed : '-'}</td>
				</tr>
				</tbody>
			</table>

		</div>
	);
}

export default DetailedWeatherTable;