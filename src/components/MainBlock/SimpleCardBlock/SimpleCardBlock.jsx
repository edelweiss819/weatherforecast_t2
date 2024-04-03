import React from 'react';
import styles from './SimpleCardBlock.module.css';
import SimpleWeather from './SimpleWeather/SimpleWeather';

function SimpleCardBlock(props) {
	return (<div className={styles.simpleCardBlock}><SimpleWeather
		className={styles.components} weatherData={props.weatherData[0]}/>
		<p className={styles.components}>Компонент 2</p>
		<p className={styles.components}>Компонент 3</p>
		<p className={styles.components}>Компонент 4</p>
		<p className={styles.components}>Компонент 5</p>
	</div>);
}

export default SimpleCardBlock;