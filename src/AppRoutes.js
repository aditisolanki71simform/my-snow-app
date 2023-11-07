import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Dashboard/HomePage';
import ECommercePage from './pages/ECommerce/ECommercePage';
import LoginPage from './pages/Authentication/LoginPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import MyProjectsPage from './pages/My Projects/MyProjectsPage';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import AccountPage from './pages/Account/AccountPage';
import CorporatePage from './pages/Corporate/CorporatePage';
import SignupPage from './pages/Authentication/SignupPage';
import ProjectsDetailPage from './pages/My Projects/ProjectsDetailPage';
import OnlineCoursesPage from './pages/OnlineCourses/OnlineCoursesPage';
import BlogPage from './pages/Blog/BlogPage';
import SocialPage from './pages/Social/SocialPage';
import ForgotPassword from './pages/Authentication/ForgotPassword';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/project-dashboard" element={<ProjectsPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/Project-detail" element={<ProjectsDetailPage />} />

        <Route path="/e-commerce" element={<ECommercePage />} />
        <Route path="/online-courses" element={<OnlineCoursesPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/social" element={<SocialPage />} />

        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
