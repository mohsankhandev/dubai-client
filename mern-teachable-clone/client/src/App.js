import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail'; // Import the new component
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import './index.css';
import AdminRoute from './pages/Admin/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageUsers from './pages/Admin/ManageUser';
import ManageCourses from './pages/Admin/ManageCourses';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/courses" element={<ManageCourses />} />

        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/verify-email" element={<VerifyEmail />} /> {/* Add the new route */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />

            {/* Admin Routes */}
        {/* <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/admin/users" component={ManageUsers} />
        <AdminRoute path="/admin/courses" component={ManageCourses} /> */}
        
        {/* Redirect to home if route is not found */}
        <Route path="*" component={Home} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
