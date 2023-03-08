import './PaginationRow.scss';
export const PaginationRow = ({ totalNumber, callBack }) => {
	const numberArray = [];
    // TODO: Queda por hacer 2 cosas:
    // 1.- Darle los estilos a la parte de abajo del pagination
    //     Osea, ponerle la foto de la flecha y darle la funcionalidad a la flecha
    //     para que cuando le des click, la funcion de atras cambie a la pagina numero 2
    // 2.- La data de search no trae la imagen, No se de donde sale esa informacion, podemos meterle 
    //     una imagen asi como decias de un cuadrado negro, y ya lo cambiamos cuando llegue el nuevo backend.

	if (totalNumber > 0) {
		for (let i = 0; i < totalNumber; i++) {
			numberArray.push(i);
		}
		return (
			<div className='pagination-row-container'>
				<span className='aqui-hay-que-poner-la-flecha'>Flecha</span>
				{numberArray.map((value) => (
					<p>{value}</p>
				))}
				<span className='aqui-hay-que-poner-la-flecha'>Flecha</span>
			</div>
		);
	}
};
