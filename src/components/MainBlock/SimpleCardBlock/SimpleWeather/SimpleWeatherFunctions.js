export function dayOfMonthHandle(date) {
	return new Date(date).getDate();
}

export function dayOfWeekHandle(date) {
	const days = [`Понедельник`, 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', `Воскресенье`];
	return days[new Date(date).getDay()];
}

export function monthHandle(date) {
	const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	return months[new Date(date).getMonth()];
}

export function kelvinToCelsius(kelvin) {
	const celsius = kelvin - 273.15;
	return `${celsius.toFixed(0)}`;
}

export function findMinTemp(weatherData) {
	let minTemp = weatherData[0].main.temp_min;
	weatherData.forEach(data => {
		const tempMin = data.main.temp_min;
		if (tempMin < minTemp) {
			minTemp = tempMin;
		}
	});
	return minTemp;
}

export function findMaxTemp(weatherData) {
	let maxTemp = weatherData[0].main.temp_max;
	weatherData.forEach(data => {
		const tempMax = data.main.temp_max;
		if (tempMax > maxTemp) {
			maxTemp = tempMax;
		}
	});
	return maxTemp;
}