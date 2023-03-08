import { useState } from 'react';

export function Switch({ children, setData }) {
	const [switchActive, setSwitchActive] = useState(false);

	let switchState = switchActive
		? 'switchToggle-icon active'
		: 'switchToggle-icon';

	const changeToggleState = () => {
		setData(!switchActive);
		setSwitchActive(!switchActive);
	}

	return (
		<div className='switchContainer'>
			<div className='switchLabel'>
				<p>{children}</p>
			</div>
			<div className='switchToggle'>
				<button className={switchState} onClick={changeToggleState}></button>
			</div>
		</div>
	);
}

/* 
	PARA USAR EL SWITCH CON CHILDREN

	<Switch>
		Ver empresas que tengan <span>propósitos y valores:</span>
	</Switch>
*/
