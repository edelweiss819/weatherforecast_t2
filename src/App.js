import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import MainBlock from './components/MainBlock/MainBlock';
import {useEffect, useState} from 'react';

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const updateWeatherData = (data) => {
		console.log(data); // Проверяем данные перед их установкой
		setWeatherData(data);
	}


	useEffect(() => {
		console.log(weatherData); // Этот console.log отобразит обновленное значение weatherData
	}, [weatherData]);
	return (
		<div className="App">
			<SearchForm updateWeatherData={updateWeatherData}/>
			<MainBlock weatherData={weatherData}/>
		</div>
	);
}

export default App;
