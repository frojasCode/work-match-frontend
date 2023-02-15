import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { Home } from './pages/Home/Home';
import { Switch } from './components/Switch/Swithc';
import { Select } from './components/Select/Select';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Home />
	</>
);
