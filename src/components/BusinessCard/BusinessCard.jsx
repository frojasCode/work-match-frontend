import { BusinessLinkCard } from '../BusinessLinkCard/BusinessLinkCard';
import './BusinessCard.scss';

import userIcon from '../../assets/BusinessCard/user.svg';
import folderIcon from '../../assets/BusinessCard/folder.svg';
import bookmarkIcon from '../../assets/BusinessCard/bookmark.svg'
import { useNavigate } from 'react-router';

export const BusinessCard = ({
	ruc,
	name,
	logoUrl,
	links,
	sector,
	workerSize,
	isSaved,
	isPremium = false,
}) => {
	const navigate = useNavigate();
	// TODO: Improve bookmark icon
	const handleClick = () => {
		navigate(`/business/${ruc}`)
	}
	return (
		<div className='business-card' onClick={handleClick}>
			<div className='business-info-title'>
				<div className='business-image-container'>
					<img src={logoUrl} alt='logo business' />
				</div>
				<span className='business-name'>{name}</span>
			</div>
			<div className='business-links'>
				{links.map((link) => (
					<BusinessLinkCard text={link} key={link} />
				))}
			</div>
			<div className='business-info-detail'>
				<div className='business-info'>
					<div className='business-info-area'>
						<img src={folderIcon} alt='user Icon' />
						Sector {sector}
					</div>
					<span className='hr'></span>
					<div className='business-info-worker-size'>
						<img src={userIcon} alt='user Icon' />
						{workerSize}
					</div>
				</div>
				<img src={bookmarkIcon} alt='bookmark icon' className='img-bookmark'/>
			</div>
		</div>
	);
};
