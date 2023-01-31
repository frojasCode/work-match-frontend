import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import SvgComponent from './assets/icons/WorkMatchIcon';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<div className='divCenter'>
			<SvgComponent />
		</div>
	</>
);
