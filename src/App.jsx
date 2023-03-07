import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { NavComponent } from './components/Nav/Nav';
import { Business } from './pages/Business/Business';
import { MyAccount } from './pages/MyAccount/MyAccount';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route element={<NavComponent />}>
						<Route index element={<Home />} />
						<Route path='me' element={<MyAccount />} />
						<Route path='search' element={<Search />} />
						<Route path='business/:ruc' element={<Business />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
