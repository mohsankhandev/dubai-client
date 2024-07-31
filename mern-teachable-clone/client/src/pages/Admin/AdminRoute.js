import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  if (user && user.role === 'admin') {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;



// Explanation:
// Route Component Update:

// In React Router v6, the Route component no longer accepts a component prop directly. Instead, you should render the desired component conditionally.
// Navigate Component:

// Replace Redirect with Navigate to handle navigation. The Navigate component programmatically navigates to a different route, replacing Redirect.
// Component Rendering Logic:

// If the user exists and has the role of 'admin', the AdminRoute component renders the specified component. Otherwise, it navigates to the login page.
// Optional Approach Using Outlet:

// If you have nested routes under AdminRoute, you can use Outlet to render the child components based on the nested route configurations.
// If your application structure requires using Outlet for nested routes, you can refactor accordingly. However, if AdminRoute is a wrapper for a specific component, the above implementation should suffice.