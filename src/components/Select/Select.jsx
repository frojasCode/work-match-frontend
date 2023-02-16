import { useState, useEffect, useRef } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { size24, colorPrimary } from '../../assets/icons/variablesIcons';

export function Select({ children, label, labelBold }) {
	const [active, setActive] = useState(false);
	const [defaultValue, setDefaultValue] = useState('Seleccionar');

	const inputRef = useRef(null);

	useEffect(() => {
		const referencia = inputRef.current;

		referencia.addEventListener('blur', () => {
			setTimeout(function () {
				setActive(false);
			}, 100);
		});

		return () => {};
	}, []);

	function handleSelected() {
		setActive(!active);
	}

	function handleSelectOption(e) {
		setDefaultValue(e.target.textContent);
		setActive(!active);
	}

	return (
		<div className='selectContainer'>
			<div className='selectLabel'>
				{label} <span>{labelBold}</span>
			</div>
			<button
				className='selectSelected'
				onClick={handleSelected}
				ref={inputRef}
			>
				<div className='selectSelected-flex'>
					<div>{defaultValue}</div>
					<IconChevronDown
						size={size24}
						color={colorPrimary}
						className='selectSelected-icon'
					/>
				</div>
			</button>
			<div className={active ? 'selectOptions active' : 'selectOptions'}>
				<div className='selectOpion' onClick={handleSelectOption}>
					franco
				</div>
				<div className='selectOpion' onClick={handleSelectOption}>
					paolo
				</div>
			</div>
		</div>
	);
}
