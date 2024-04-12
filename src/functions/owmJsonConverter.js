export function owmJsonConverter(jsonData) {
	const extractedData = {};

	jsonData.list.forEach(item => {
		const date = item.dt_txt.split(' ')[0];
		if (!extractedData[date]) {
			extractedData[date] = [];
		}
		extractedData[date].push(item);
	});

	return extractedData;
}