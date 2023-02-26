import './AwardsImage.scss';
export const AwardsImage = ({ imgTitle, imgSubtitle, imgPlace, imgYear }) => {
	return (
		<div className='awards-image'>
			<span className='awards-title'>{imgTitle}</span>
			<span className='awards-subtitle'>{imgSubtitle}</span>
			<span className='awards-place'>{imgPlace}</span>
			<span className='awards-year'>{imgYear}</span>
		</div>
	);
};
