import { colorPrimary, size32 } from '../../assets/icons/variablesIcons';
import { IconMenu2 } from '@tabler/icons-react';
import { WorkMatchLogo } from '../../assets/icons/WorkMatchLogo';

export function NavComponent() {
	return (
		<nav className='NavComponent'>
			<div className='container'>
				<div className='NavComponent-wrapper'>
					{/* <IconArrowLeft color={colorPrimary} size={size32} /> */}
					<WorkMatchLogo size={32} />
					<IconMenu2 color={colorPrimary} size={size32} />
				</div>
			</div>
		</nav>
	);
}
