import './MyAccountCard.scss';
import { BusinessTitle } from '../BusinessTitle/BusinessTitle';

export const MyAccountCard = ({ userName, userEmail }) => {
	return (
		<div className='my-account-card-container'>
			<img
				src={
					'https://lh3.googleusercontent.com/ogw/AAEL6sjchrdJCElpLPyXU_uS-tm7Mhv1qHrHNxLrzexR=s32-c-mo'
				}
				alt='user image'
			/>
			<div className='my-account-user-info'>
				<div className='my-account-user-name-info'>
					<BusinessTitle title={'Tu Cuenta'} style={{margin: '0px'}}/>
					<span>{userName}</span>
				</div>
                <span className="my-account-user-email">{userEmail}</span>
                <span className="my-account-edit-profile">Editar perfil</span>
			</div>
		</div>
	);
};
