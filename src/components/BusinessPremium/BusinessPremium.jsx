import { BusinessNoCard } from '../BusinessNoCard/BusinessNoCard';
import { BusinessParaph } from '../BusinessParaph/BusinessParaph';
import { BusinessTitle } from '../BusinessTitle/BusinessTitle';
import './BusinessPremium.scss';

export const BusinessPremium = (props) => {
	const businessInfo = props?.bussinesInfo?.attributes;
	
	console.log(businessInfo);
	return (
		<div className='business-prem-container'>
			<img
				src={businessInfo.premium?.banner_header?.data?.attributes?.url}
				alt='business image'
				className='business-banner'
			/>
			<BusinessNoCard
				imgNegativeMT='-30px'
				businessInfo={props?.bussinesInfo}
			/>

			<div className='business-prem-nosotros'>
				<BusinessTitle
					title={'¿Por qué nosotros?'}
					style={{ margin: '1.125rem 0rem' }}
				/>
				<BusinessParaph
					paraph={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est. Praesent sit amet rhoncus magna elitar.'
					}
				/>
				<BusinessParaph
					paraph={
						'Quisque id fringilla ligula, nec dignissim ex. Quisque a enim vel mi eleifend aliquet. Curabitur in lectus vestibulum velit vehicula suscipit. Sed in lectus dui. Pellentesque habitant'
					}
					style={{ marginTop: '1.125rem' }}
				/>

				{/* Aqui tenemos que buscar como hacemos lo del video, una libreria quiza? */}
				<BusinessTitle title={'¿En qué creemos?'} />
			</div>
		</div>
	);
};
