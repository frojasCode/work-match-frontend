import './BusinessParaph.scss';

export const BusinessParaph = ({ paraph, style }) => {
	return (
		<p className='business-information-paraph' style={style}>
			{paraph}
		</p>
	);
};
