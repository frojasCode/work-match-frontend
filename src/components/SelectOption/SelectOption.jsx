export const SelectOption = ({ options, active, setActive, setDefaultValue }) => {
	const handleSelectOption = (e) => {
		setDefaultValue(e.target.textContent);
		setActive(!active);
	};
	return (
		<div className={active ? 'selectOptions active' : 'selectOptions'}>
			{options.map((item) => (
				<div
					className='selectOpion'
					onClick={handleSelectOption}
					key={item}
				>
					{item}
				</div>
			))}
		</div>
	);
};
