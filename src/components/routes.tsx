import Home from './pages/Home/Home';

interface RouteConfig {
  path: string;
  component: any;
  exact?: boolean;
  activatedOnly?: boolean;
  routeType?: 'private' | 'auth';
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

export default routes;
