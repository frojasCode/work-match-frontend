import { AvisosPublicados } from '../AvisosPublicados/AvisosPublicados';
import { BusinessInformation } from '../BusinessInformation/BusinessInformation';
import { BusinessCard } from '../../components/BusinessCard/BusinessCard';

import './BusinessNoPremium.scss';
import { BusinessNoCard } from '../BusinessNoCard/BusinessNoCard';
import { AwardsContainer } from '../AwardsContainer/AwardsContainer';
import { CertificationContainer } from '../CertificationContainer/CertificationContainer';

export const BusinessNoPremium = (props) => {
	const businessInfo = props?.bussinesInfo?.attributes;
	return (
		<>
			<BusinessNoCard businessInfo={props?.bussinesInfo}/>
			<BusinessInformation
				text={businessInfo?.por_que_nosotros}
				title='¿Por qué nosotros?'
				key='¿Por qué nosotros?'
				showButton={true}
			>
				<>
					<BusinessInformation
						text={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est. Praesent sit amet rhoncus magna elitar...'
						}
					/>
					<BusinessInformation
						text={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est. Praesent sit amet rhoncus magna elitar...'
						}
					/>
				</>
			</BusinessInformation>
			<BusinessInformation
				title='¿En qué creemos?'
				text={businessInfo?.mision}
				key='¿En qué creemos?'
				showButton={true}
				subTitle='Misión'
			>
				<>
					<BusinessInformation
						subTitle={'Vision'}
						text={businessInfo?.vision}
					/>
					<BusinessInformation valores={['test1', 'test2', 'test3', 'test4']} />
				</>
			</BusinessInformation>

			{businessInfo?.puestos_publicados && (
				<AvisosPublicados urlAvisos={businessInfo?.puestos_publicados} />
			)}

			<AwardsContainer awardsList={businessInfo?.premios} />

			<CertificationContainer
				certificationData={businessInfo?.certificaciones}
			/>

			<div className='other-business'>
				<span>Otras empresas:</span>
				<span className='ver-mas'>Ver más</span>
			</div>

			<BusinessCard
				id={'BCP'}
				isSaved={false}
				key={'BCP'}
				name='Banco de credito del...'
				links={['Premios y certi.', 'Propositos y val.', 'Avisos publicados']}
				workerSize='De 15 a 50 trabajadores'
				area={'Financiero'}
				logoUrl={
					'https://yt3.googleusercontent.com/KlFkIERbQ9w5R-6mg3OgX_ifWmesDciCaZ7n74dSr1lwJM_C0nDS_jre3AIoiaop4d3rss8sjg=s900-c-k-c0x00ffffff-no-rj	'
				}
			/>
		</>
	);
};
