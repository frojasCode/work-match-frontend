import { NavComponent } from '../../components/Nav/Nav';
import IllustrationHeader from '../../assets/illustrations/illustration-home-header.png';
import IllustrationFooter from '../../assets/illustrations/illustration-home-footer.png';
import { Polygon } from '../../assets/icons/Polygon';
import { colorSecondary } from '../../assets/icons/variablesIcons';

export function Home() {
	return (
		<>
			<NavComponent />
			<header className='homeHeader'>
				<div className='container'>
					<div className='homeHeader-wrapper'>
						<div className='homeHeader-paragraph'>
							<p>
								Elige <span>bien</span> la empresa en la que quieres trabajar
							</p>
						</div>
						<div className='homeHeader-image'>
							<img src={IllustrationHeader} alt='' />
						</div>
					</div>
				</div>
				{/* <div className='homeHeader-polygon-1'>
					<Polygon size={256} colorStroke={colorSecondary} widthStroke={12} />
				</div>
				<div className='homeHeader-polygon-2'>
					<Polygon size={256} colorStroke={colorSecondary} widthStroke={12} />
				</div>
				<div className='homeHeader-polygon-3'>
					<Polygon size={256} colorStroke={colorSecondary} widthStroke={12} />
				</div> */}
			</header>
		</>
	);
}
