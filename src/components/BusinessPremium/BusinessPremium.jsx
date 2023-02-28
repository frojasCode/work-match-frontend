import { BusinessInformation } from '../BusinessInformation/BusinessInformation';
import { BusinessNoCard } from '../BusinessNoCard/BusinessNoCard';
import { BusinessParaph } from '../BusinessParaph/BusinessParaph';
import { BusinessSubTitle } from '../BusinessSubTitle/BusinessSubTitle';
import { BusinessTitle } from '../BusinessTitle/BusinessTitle';
import './BusinessPremium.scss';

export const BusinessPremium = () => {
	return (
		<div className='business-prem-container'>
			<img
				src={
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupeEEY-5O_R9odHwpilIETniXaWuDRdDQPBlQNhtfZ-jDJ1oaRmZLZ-gw1fe13OAOzQ&usqp=CAU'
				}
				alt='business image'
				className='business-banner'
			/>
			<BusinessNoCard imgNegativeMT='-30px' />

			<div className='business-prem-nosotros'>
				<BusinessTitle title={'¿Por qué nosotros?'}  style={{margin: '1.125rem 0rem'}}/>
				<BusinessParaph
					paraph={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est. Praesent sit amet rhoncus magna elitar.'
					}
				/>
				<BusinessParaph
					paraph={
						'Quisque id fringilla ligula, nec dignissim ex. Quisque a enim vel mi eleifend aliquet. Curabitur in lectus vestibulum velit vehicula suscipit. Sed in lectus dui. Pellentesque habitant'
					}
					style={{marginTop: '1.125rem'}}
				/>

				{/* Aqui tenemos que buscar como hacemos lo del video, una libreria quiza? */}
				<BusinessTitle title={"¿En qué creemos?"} />
			</div>
		</div>
	);
};
