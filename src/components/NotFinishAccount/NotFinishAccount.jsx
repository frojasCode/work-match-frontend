export const NotFinishAccount = ({userName}) => {
    return (
        <div className="not-finish-account-container">
            <span>{userName}</span>
            <p>¡Tu cuenta esta incompleta! Estás a muy poco de terminarla!</p>
            <button>Completar</button>
        </div>
    )
}