import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Authentication/LoginPage';
import SignupPage from './pages/Authentication/SignupPage';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Layout from './Layout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Layout />
    </Router>
  );
};

export default AppRoutes;
