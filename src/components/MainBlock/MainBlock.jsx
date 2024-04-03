// MainBlock.js
import React from 'react';
import SimpleCardBlock from './SimpleCardBlock/SimpleCardBlock';
import styles from './MainBlock.module.css';

function MainBlock(props) {
	
	return (
		<div className={styles.mainBlock}>
			<SimpleCardBlock weatherData={props.weatherData}/>
		</div>
	);
}

export default MainBlock;
