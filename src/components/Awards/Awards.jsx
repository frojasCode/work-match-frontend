import { AwardsImage } from '../AwardsImage/AwardsImage';

import './Awards.scss';

export const Awards = ({
	imgTitle,
	imgSubtitle,
	imgPlace,
	imgYear,
	textTitle,
	textSubTitle,
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
				<span className='awards-text-title'>{textTitle}</span>
				<span className='awards-text-subtitle'>{textSubTitle}</span>
			</div>
		</div>
	);
};
