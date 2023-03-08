import { useState, useEffect, useRef } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { size24, colorPrimary } from '../../assets/icons/variablesIcons';
import { SelectOption } from '../SelectOption/SelectOption';

export function Select({
	children,
	label,
	labelBold,
	options,
	labelAfterBold = '',
	setData
}) {
	const [active, setActive] = useState(false);
	const [defaultValue, setDefaultValue] = useState('Seleccionar');
	const inputRef = useRef(null);

	useEffect(() => {
		const referencia = inputRef.current;

		referencia.addEventListener('focusout', () => {
			setTimeout(function () {
				setActive(false);
			}, 100);
		});

		return () => {};
	}, []);

	function handleSelected() {
		setActive(!active);
	}

	return (
		<div className='selectContainer'>
			<div className='selectLabel'>
				{label} <span>{labelBold}</span> {labelAfterBold}
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
			<SelectOption
				options={options}
				active={active}
				setActive={setActive}
				setDefaultValue={setDefaultValue}
				setData={setData}
			/>
		</div>
	);
}
