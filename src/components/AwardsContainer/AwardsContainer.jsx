import { Award } from "../Awards/Awards"

export const AwardsContainer = ({awardsList}) => {
    return (
        <>
			<h2 className='business-information-sub-title'>Premios</h2>
            {awardsList?.map((award) => 
                <Award 
                key={award.id}
                imgYear={award.year}
                imgTitle={award.abreviatura_entidad}
                imgPlace={award.puesto_premio}
                imgSubtitle={award.entidad}
                nombrePremio={award.nombre_premio}
                // TODO: No tenemos informacion del subTexto del premio
                subTextoPremio={award.nombre_premio} />
            )}
        </>
    )
}