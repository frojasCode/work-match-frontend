import { useState } from 'react';
import { MyAccountTabs } from '../../components/MyAccountTabs/MyAccountTabs';
import { NotFinishAccount } from '../../components/NotFinishAccount/NotFinishAccount';
import './MyAccount.scss';

export const MyAccount = () => {
    const [isAccountActive, setIsAccountActive] = useState(true);

	return (
        <div className='my-account-container'>
            <NotFinishAccount userName={"Marcos"} />
            <MyAccountTabs />

            <span className='my-account-footer'> 2023 Workmatch | Todos los derechos reservados</span>
        </div>
    );
};
