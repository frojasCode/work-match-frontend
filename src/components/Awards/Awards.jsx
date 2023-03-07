import { AwardsImage } from '../AwardsImage/AwardsImage';

import './Awards.scss';

export const Award = ({
	imgTitle,
	imgSubtitle,
	imgPlace,
	imgYear,
	nombrePremio,
	subTextoPremio,
}) => {
		return (
		<div className='awards-container'>
			<AwardsImage
				imgPlace={imgPlace}
				imgSubtitle={imgSubtitle}
				imgTitle={imgTitle}
				imgYear={imgYear}
				key={imgTitle}
			/>
			<div className='awards-text'>
				<span className='awards-text-title'>{nombrePremio}</span>
				<span className='awards-text-subtitle'>{subTextoPremio}</span>
			</div>
		</div>
	);
};
