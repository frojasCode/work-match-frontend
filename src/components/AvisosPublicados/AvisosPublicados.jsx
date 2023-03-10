import './AvisosPublicados.scss';

export const AvisosPublicados = ({ urlAvisos }) => {
	return (
		<a href={urlAvisos} target="_blank">
			<div className='aviso-container'>
				<div className='aviso-info'>
					<h2 className='aviso-titulo'>Avisos publicados</h2>
					<p className='aviso-paraph'>
						¡Conoce y postula a los nuevos puestos que estamos buscando!
					</p>
					<span className='aviso-ver-mas'>Ver más</span>
				</div>
			</div>
		</a>
	);
};
