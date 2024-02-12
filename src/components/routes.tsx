import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';

interface RouteConfig {
  path: string;
  component: any;
  exact?: boolean;
  routeType?: 'private' | 'auth';
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/auth/login',
    component: Login,
  },
];

export default routes;
