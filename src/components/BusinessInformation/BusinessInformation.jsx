import './BusinessInformation.scss';

export const BusinessInformation = ({
	title,
	text,
	buttonText,
	showButton = false,
	subTitle
}) => {
	return (
		<div className='business-information-container'>
			<h3 className="business-information-title">{title}</h3>
			{subTitle && <h4 className="business-information-subtitle">{subTitle}</h4>}
			<p className="business-information-paraph">{text}</p>
			{showButton && <button className='btn-ver-mas'>{buttonText}</button>}
		</div>
	);
};
