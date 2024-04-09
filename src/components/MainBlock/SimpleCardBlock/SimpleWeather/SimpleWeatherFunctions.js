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
	// Инициализируем переменную для хранения минимальной температуры
	let minTemp = weatherData[0].main.temp_min;
	// Перебираем все объекты в массиве weatherData
	weatherData.forEach(data => {
		// Получаем значение temp_min из текущего объекта
		const tempMin = data.main.temp_min;
		// Если tempMin меньше текущего значения minTemp, обновляем minTemp
		if (tempMin < minTemp) {
			minTemp = tempMin;
		}
	});
	// Возвращаем наименьшее значение температуры
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