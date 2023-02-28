import "./BusinessTitle.scss";
export const BusinessTitle = ({title, style}) => {
    return <h3 className='business-information-title' style={style}>{title}</h3>
}