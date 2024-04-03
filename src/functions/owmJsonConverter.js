export function owmJsonConverter(jsonData) {
	const extractedData = {};

	// Проходимся по каждому объекту в списке
	jsonData.list.forEach(item => {
		// Извлекаем дату из строки с датой и временем
		const date = item.dt_txt.split(' ')[0];

		// Если такой даты еще нет в extractedData, создаем для нее пустой массив
		if (!extractedData[date]) {
			extractedData[date] = [];
		}

		// Добавляем информацию о погоде для этой даты в массив
		extractedData[date].push(item);
	});

	return extractedData;
}