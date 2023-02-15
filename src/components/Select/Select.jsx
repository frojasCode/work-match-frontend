import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { size24, colorPrimary } from '../../assets/icons/variablesIcons';

const selectList = ['option0', 'option1', 'option2', 'option3', 'option4'];
const selectList2 = ['a', 'b', 'c', 'd', 'e'];

export function Select({ children, list }) {
	const [clickActive, setClickActive] = useState(false);
	const [focusActive, setFocusActive] = useState(false);

	/* console.log(e.target.textContent); */

	/* password.addEventListener('focus', (event) => {
		event.target.style.background = 'pink';
	  }); */

	return (
		<div className='selectContainer'>
			<div className='selectLabel'>{children}</div>
			<button className='selectSelected'>
				<div className='selectSelected-flex'>
					<div>Seleccionar</div>
					<IconChevronDown size={size24} color={colorPrimary} />
				</div>
			</button>
			<div className='selectOptions'>
				{selectList.map((element, index) => {
					return (
						<div className='selectOpion' key={index}>
							{element}
						</div>
					);
				})}
			</div>
		</div>
	);
}
