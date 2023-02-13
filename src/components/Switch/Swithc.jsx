import { useState } from 'react';

export function Switch({ children }) {
	const [switchActive, setSwitchActive] = useState(false);

	let switchState = switchActive
		? 'switchToggle-icon active'
		: 'switchToggle-icon';

	function changeToggleState() {
		return setSwitchActive(!switchActive);
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
