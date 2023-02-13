import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { Home } from './pages/Home/Home';
import { Switch } from './components/Switch/Swithc';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Switch>
			Ver empresas que tengan <span>propósitos y valores:</span>
		</Switch>
	</>
);
