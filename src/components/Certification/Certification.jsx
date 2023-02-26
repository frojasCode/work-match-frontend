import './Certification.scss';
import certificationIcon from '../../assets/Certification/check.svg';

export const Certification = ({ isoNumber, year, certificationName }) => {
	return (
		<section className="certification-section">
			<div className='certification-wrapper'>
				<article className='certification-container'>
					<span className='certification-title'>ISO</span>
					<span className='certification-number'>{isoNumber}</span>
					<img src={certificationIcon} alt='certification-image' />
					<span className='certification-year'>{year}</span>
				</article>
			</div>
			<span className='certification-name'>{certificationName}</span>
		</section>
	);
};
