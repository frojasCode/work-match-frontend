import IllustrationHeader from '../../assets/illustrations/illustration-home-header.png';
import IllustrationFooter from '../../assets/illustrations/illustration-home-footer.png';
import { Polygon } from '../../assets/icons/Polygon';
import {
	colorSecondary,
	colorTertiary,
} from '../../assets/icons/variablesIcons';
import { Select } from '../../components/Select/Select';
import { Switch } from '../../components/Switch/Switch';
import { useNavigate } from 'react-router-dom';

import { sectores_economicos } from './data/sectores_economicos';
import { regiones } from './data/regiones';
import { useState } from 'react';

export function Home() {
	const navigate = useNavigate();

	const [sectorEconomico, setSectorEconomico] = useState('');
	const [region, setRegion] = useState('');
	const [sizeBusiness, setSizeBusiness] = useState(0);
	const [propositoSwitch, setPropositoSwitch] = useState(false);
	const [premiosCertificacionesSwitch, setPremiosCertificacionesSwitch] =
		useState(false);
	const [avisoPublicadosSwitch, setAvisosPublicadosSwitch] = useState(false);

	const handleClick = () => {
		const queryArray = [];

		!!sectorEconomico.length
			? queryArray.push(`sectorEconomico=${sectorEconomico}`)
			: '';
		!!region.length ? queryArray.push(`region=${region}`) : '';
		!!sizeBusiness.length ? queryArray.push(`tamaño=${sizeBusiness}`) : '';
		propositoSwitch ? queryArray.push(`proposito=${true}`) : '';
		premiosCertificacionesSwitch ? queryArray.push(`premios=${true}`) : '';
		avisoPublicadosSwitch ? queryArray.push(`avisos=${true}`) : '';

		let queryString = '';

		if (!!queryArray.length) {
			queryString = '?' + queryArray.join('&');
		}

		const navigateUrl = !!queryString.length
			? `search${queryString}`
			: 'search';

		navigate(navigateUrl);
	};
	return (
		<>
			<section className='home'>
				<header className='homeHeader'>
					<div className='container'>
						<div className='homeHeader-wrapper'>
							<div className='homeHeader-paragraph'>
								<p>
									Elige <span>bien</span> la empresa en la que quieres trabajar
								</p>
							</div>
							<div className='homeHeader-image'>
								<img src={IllustrationHeader} alt='Header Ilustration' />
							</div>
						</div>
					</div>
					<div className='homeHeader-polygon homeHeader-polygon-1'>
						<Polygon size={420} colorStroke={colorTertiary} widthStroke={10} />
					</div>
					<div className='homeHeader-polygon homeHeader-polygon-2'>
						<Polygon size={596} colorStroke={colorTertiary} widthStroke={6} />
					</div>
					<div className='homeHeader-polygon homeHeader-polygon-3'>
						<Polygon size={350} colorStroke={colorSecondary} widthStroke={10} />
					</div>
				</header>
				<main className='homeMain'>
					<div className='container'>
						<div className='homeMain-title'>
							<p>Al elegir tu nueva empresa para trabajar</p>
							<h1>¿Qué es lo más importante para ti?</h1>
						</div>
						<div className='homeMain-inputs'>
							<Select
								options={sectores_economicos}
								label='El'
								labelBold='sector económico:'
								setData={setSectorEconomico}
							/>
							<Select
								options={regiones}
								label='¿En qué'
								labelBold='región'
								labelAfterBold='opera?'
								setData={setRegion}
							/>
							<Select
								options={['Sector1', 'Sector2', 'Sector3']}
								label='Selecciona el'
								labelAfterBold='tamaño de la empresa:'
								setData={setSizeBusiness}
							/>
							<Switch setData={setPropositoSwitch}>
								Ver empresas que tengan <span>propósito y valores:</span>
							</Switch>
							<Switch setData={setPremiosCertificacionesSwitch}>
								Empresas con <span>premios y certificaciones:</span>
							</Switch>
							<Switch setData={setAvisosPublicadosSwitch}>
								Empresas con <span>avisos publicados:</span>
							</Switch>

							<button className='btn-primary' onClick={handleClick}>
								Buscar
							</button>
						</div>
					</div>
					<div className='homeMain-illustration'>
						<img src={IllustrationFooter} alt='Footer ilustration' />
					</div>
				</main>
				<footer className='homeFooter'>
					<div className='container'>
						<p>2023 Workmatch | Todos los derechos reservados</p>
					</div>
				</footer>
			</section>
		</>
	);
}
