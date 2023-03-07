import { Certification } from '../Certification/Certification';

export const CertificationContainer = ({ certificationData }) => {
	return (
		<>
			<h2 className='business-information-sub-title'>Certificados</h2>
			{certificationData && certificationData.map((certification) => (
				<Certification
					certificationName={certification.nombre_certificacion}
					isoNumber={certification.numero_certificado}
					year={certification.year}
                    key={certification.nombre_certificacion}
				/>
			))}
		</>
	);
};
