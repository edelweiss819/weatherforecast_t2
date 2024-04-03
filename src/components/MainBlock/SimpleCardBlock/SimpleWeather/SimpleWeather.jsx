import React from 'react';

function SimpleWeather(props) {
	console.log(props.weatherData);
	if (props.weatherData && props.weatherData.list && props.weatherData.list.length > 0) {
		return (<div>{props.weatherData.list[0].dt_txt}</div>);
	}
	return (<div>Нет данных.</div>
	);
}

export default SimpleWeather;