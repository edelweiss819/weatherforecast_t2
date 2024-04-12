import './App.css';
import MainBlock from './components/MainBlock/MainBlock';
import SearchForm from './components/SearchForm/SearchForm';
import {useState} from 'react';

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const updateWeatherData = (data) => {
		setWeatherData(data);
	};

	const [cityName, setCityName] = useState('London');
	const updateCityName = (cityName) => {
		setCityName(cityName);
	};

	return (
		<div className="App">
			<div className="appComponents"><SearchForm
				weatherData={weatherData} setWeatherData={setWeatherData}
				updateWeatherData={updateWeatherData}
				cityName={cityName} setCityName={setCityName}
				updateCityName={updateCityName}
			/>
				<MainBlock weatherData={weatherData} cityName={cityName}/></div>
		</div>
	);
}

export default App;
