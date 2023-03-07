import { NavComponent } from '../../components/Nav/Nav';
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

export function Home() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("search")
	}
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
							<Select options={["Sector1","Sector2", "Sector3"]}>
								El <span>sector económico:</span>
							</Select>
							<Select options={["Sector1","Sector2", "Sector3"]}>
								¿En <span>región</span> opera?
							</Select>
							<Select options={["Sector1","Sector2", "Sector3"]}>
								Selecciona el <span>tamaño de la empresa:</span>
							</Select>
							<Switch>
								Ver empresas que tengan <span>propósito y valores:</span>
							</Switch>
							<Switch>
								Empresas con <span>premios y certificaciones:</span>
							</Switch>
							<Switch>
								Empresas con <span>avisos publicados:</span>
							</Switch>

							<button className='btn-primary' onClick={handleClick}>Buscar</button>
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
