import "./BusinessSubTitle.scss";

export const BusinessSubTitle = ({subTitle, styles}) => {
    return <h4 className='business-information-subtitle' style={styles}>{subTitle}</h4>
}