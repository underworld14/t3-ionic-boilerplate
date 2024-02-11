import { Redirect, Route } from 'react-router-dom';

import { useAuthStore } from '~/store/auth-store';

export const PrivateRoute = ({ component: Component, activatedOnly, ...rest }: any) => {
  const { user, token } = useAuthStore();

  return (
    <Route
      {...rest}
      render={props => {
        if (user && token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/auth/login" />;
        }
      }}
    />
  );
};

export const AuthRoute = ({ component: Component, ...rest }: any) => {
  const { user, token } = useAuthStore();
  return (
    <Route
      {...rest}
      render={props => {
        if (user && token) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
