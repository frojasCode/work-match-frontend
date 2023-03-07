import folderIcon from '../../assets/BusinessCard/folder.svg';
import peopleIcon from '../../assets/BusinessCard/user.svg';
import bookmarkIcon from '../../assets/BusinessCard/bookmark.svg';

import './BusinessNoCard.scss';

export const BusinessNoCard = ({businessInfo}, {imgNegativeMT = "0px"}) => {
	return (
		<div className='business-no-card-container'>
			<div className='img-container-wrapper'>
				<div className='img-container' style={{marginTop: imgNegativeMT}}>
					<img
						src={businessInfo?.attributes?.logo?.data?.attributes?.url}
						alt='business logo'
						className='business-no-card-logo'
					/>
				</div>
				<img src={bookmarkIcon} alt='bookmark icon' />
			</div>
			<span className='business-no-card-title'>{businessInfo?.nombre}</span>
			<div className='business-no-card-info-container'>
				<div className='business-no-card-info'>
					<img src={folderIcon} alt='folder icon' />
					<span className='business-no-card-info-text'>
						Sector {businessInfo?.attributes?.sector_economico}
					</span>
				</div>
				<div className='business-no-card-info'>
					<img src={peopleIcon} alt='user icon' />
					<span className='business-no-card-info-text'>
						{businessInfo?.attributes?.trabajadores}
					</span>
				</div>
			</div>
		</div>
	);
};
