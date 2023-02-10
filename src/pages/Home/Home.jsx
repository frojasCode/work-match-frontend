import { NavComponent } from '../../components/Nav/Nav';
import IllustrationHeader from '../../assets/illustrations/illustration-home-header.png';
import IllustrationFooter from '../../assets/illustrations/illustration-home-footer.png';
import { Polygon } from '../../assets/icons/Polygon';
import {
	colorSecondary,
	colorTertiary,
} from '../../assets/icons/variablesIcons';

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
		</>
	);
}
