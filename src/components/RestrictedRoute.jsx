import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, error } = useAuth();

  const isAuthenticated = isLoggedIn && !error;

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};