export const SelectOption = ({ options, active, setActive, setDefaultValue, setData }) => {
	const handleSelectOption = (e) => {
		setDefaultValue(e.target.textContent);
		setActive(!active);
		setData(e.target.textContent);
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
