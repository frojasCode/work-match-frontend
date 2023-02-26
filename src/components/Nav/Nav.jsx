import { colorPrimary, size32 } from '../../assets/icons/variablesIcons';
import { IconMenu2 } from '@tabler/icons-react';
import { WorkMatchLogo } from '../../assets/icons/WorkMatchLogo';
import { Outlet } from 'react-router';
export function NavComponent() {
	return (
		<main>
			<nav className='NavComponent'>
				<div className='container'>
					<div className='NavComponent-wrapper'>
						<WorkMatchLogo size={32} />
						<IconMenu2 color={colorPrimary} size={size32} />
					</div>
				</div>
			</nav>
			<Outlet />
		</main>
	);
}
