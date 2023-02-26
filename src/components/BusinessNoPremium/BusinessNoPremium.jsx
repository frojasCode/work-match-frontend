import { AvisosPublicados } from '../AvisosPublicados/AvisosPublicados';
import { Awards } from '../Awards/Awards';
import { BusinessInformation } from '../BusinessInformation/BusinessInformation';
import { Certification } from '../Certification/Certification';
import { BusinessCard } from '../../components/BusinessCard/BusinessCard';

import './BusinessNoPremium.scss';
export const BusinessNoPremium = () => {
	return (
		<>
			<BusinessInformation
				buttonText='Ver más'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est. Praesent sit amet rhoncus magna elitar...'
				title='¿Por qué nosotros?'
				key='¿Por qué nosotros?'
				showButton={true}
			/>
			<BusinessInformation
				title='¿En qué creemos?'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit est.'
				key='¿En qué creemos?'
				showButton={true}
				buttonText='Ver más'
				subTitle='Misión'
			/>
			<AvisosPublicados />

			<h2 className='business-information-sub-title'>Premios</h2>

			<Awards
				textTitle='Great Place to Work'
				textSubTitle='Produccion y operaciones'
				imgPlace={1}
				imgSubtitle='Producciones y Operaciones'
				imgTitle='GPTW'
				imgYear={2022}
				key={Math.random()}
			/>

			<Awards
				textTitle='Merco'
				textSubTitle='Responsabilad ESG'
				imgPlace={1}
				imgSubtitle='Responsabilidad ESG'
				imgTitle='Merco'
				imgYear={2022}
				key={Math.random()}
			/>

			<Awards
				textTitle='ABE'
				textSubTitle='Aprendizaje y desarrollo de personas'
				imgPlace={1}
				imgSubtitle='Aprendizaje y Desarrollo de personas'
				imgTitle='ABE'
				imgYear={2022}
				key={Math.random()}
			/>

			<h2 className='business-information-sub-title'>Certificados</h2>

			<Certification
				isoNumber={100400}
				year={2022}
				key={100400}
				certificationName='Nombre del certificado'
			/>
			<Certification
				isoNumber={100500}
				year={2022}
				key={100500}
				certificationName='Nombre del certificado'
			/>

			<div className='other-business'>
				<span>Otras empresas:</span>
				<span className='ver-mas'>Ver más</span>
			</div>

			<BusinessCard
				id={'BCP'}
				isSaved={false}
				key={'BCP'}
				name="Banco de credito del..."
				links={['Premios y certi.', 'Propositos y val.', 'Avisos publicados']}
				workerSize="De 15 a 50 trabajadores"
				area={"Financiero"}
				logoUrl={"https://yt3.googleusercontent.com/KlFkIERbQ9w5R-6mg3OgX_ifWmesDciCaZ7n74dSr1lwJM_C0nDS_jre3AIoiaop4d3rss8sjg=s900-c-k-c0x00ffffff-no-rj"}
			/>
		</>
	);
};
