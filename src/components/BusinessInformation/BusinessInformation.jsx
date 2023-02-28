import { useState } from 'react';
import { BusinessParaph } from '../BusinessParaph/BusinessParaph';
import { BusinessSubTitle } from '../BusinessSubTitle/BusinessSubTitle';
import { BusinessTitle } from '../BusinessTitle/BusinessTitle';
import './BusinessInformation.scss';

export const BusinessInformation = ({
	title,
	text,
	showButton = false,
	subTitle,
	children,
	valores = [],
}) => {
	const [expand, setExpand] = useState(false);
	const [buttonText, setButtonText] = useState('Ver más');

	const handleExpand = () => {
		setExpand(!expand);
		if (buttonText === 'Ver más') {
			setButtonText('Ver menos');
			return;
		}
		setButtonText('Ver más');
	};
	return (
		<div className='business-information-container'>
			{title && <BusinessTitle title={title}/>}

			{subTitle && (
				<BusinessSubTitle subTitle={subTitle} />
			)}

			{expand ? (
				<div>
					<BusinessParaph paraph={text}/>
					{children}
				</div>
			) : (
				<BusinessParaph paraph={text}/>
			)}

			{!!valores.length && (
				<>
					<BusinessSubTitle  subTitle={"Valores"} />
					<ul style={{ marginTop: '5px' }}>
						{valores.map((valor) => (
							<li key={valor}> valor</li>
						))}
					</ul>
				</>
			)}

			{showButton && (
				<button className='btn-ver-mas' onClick={handleExpand}>
					{buttonText}
				</button>
			)}
		</div>
	);
};
