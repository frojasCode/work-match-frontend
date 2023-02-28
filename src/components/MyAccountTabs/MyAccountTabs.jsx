import { useState } from 'react';
import { Search } from '../../pages/Search/Search';
import { MyAccountCard } from '../MyAccountCard/MyAccountCard';
import './MyAccountTabs.scss';

export const MyAccountTabs = () => {
	const [currentTab, setCurrentTab] = useState('TuCuenta');
	return (
		<div className='my-account-tabs'>
			<div className='my-account-tabs-list'>
				<ul>
					<li
						className={currentTab === 'TuCuenta' ? 'active' : null}
						onClick={() => setCurrentTab('TuCuenta')}
					>
						Tu cuenta
					</li>
					<li
						className={currentTab === 'EmpresasGuardadas' ? 'active' : null}
						onClick={() => setCurrentTab('EmpresasGuardadas')}
					>
						Empresas Guardadas
					</li>
				</ul>
			</div>
			<div className='my-account-tabs-wrapper'>
				{currentTab == 'TuCuenta' && (
					<div className='my-account-content'>
						<MyAccountCard userName={"Marcos Nieto"} userEmail={"marcosnieto@gmail.com"}/>
					</div>
				)}
                {currentTab == 'EmpresasGuardadas' && (
					<div className='my-account-contentmy-account-content'>
						<Search />
					</div>
				)}
			</div>
		</div>
	);
};
