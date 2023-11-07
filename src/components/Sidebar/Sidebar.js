import { ReactComponent as LogoImg } from '../../assets/images/Logo.svg';
import Link from 'antd/es/typography/Link';
import DefaultIcon from '../Icon/Sidebar/DefaultIcon';
import ECommerceIcon from '../Icon/Sidebar/ECommerceIcon';
import ProjectsIcon from '../Icon/Sidebar/ProjectsIcon';
import OnlineCoursesIcon from '../Icon/Sidebar/OnlineCoursesIcon';
import UserProfileIcon from '../Icon/Sidebar/UserProfileIcon';
import AccountIcon from '../Icon/Sidebar/AccountIcon';
import CorporateIcon from '../Icon/Sidebar/CorporateIcon';
import BlogIcon from '../Icon/Sidebar/BlogIcon';
import SocialIcon from '../Icon/Sidebar/SocialIcon';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div>
        <div className="snow_logo">
          <LogoImg />
        </div>
        <div className="sidebar_items">
          <ul>
            <li className="first-child">
              <Link className="sidebar_item" href="/dashboard">
                <DefaultIcon />
                <span className="sidebar_item_text">Default</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/project-dashboard">
                <DefaultIcon />
                <span className="sidebar_item_text">Project Dash</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/e-commerce">
                <ECommerceIcon />
                <span className="sidebar_item_text">eCommerce</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/my-projects">
                <ProjectsIcon />
                <span className="sidebar_item_text">Projects</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/online-courses">
                <OnlineCoursesIcon />
                <span className="sidebar_item_text">Online Courses</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/user-profile">
                <UserProfileIcon />
                <span className="sidebar_item_text">User Profile</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/account">
                <AccountIcon />
                <span className="sidebar_item_text">Account</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/corporate">
                <CorporateIcon />
                <span className="sidebar_item_text">Corporate</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/blog">
                <BlogIcon />
                <span className="sidebar_item_text">Blog</span>
              </Link>
            </li>
            <li>
              <Link className="sidebar_item" href="/social">
                <SocialIcon />
                <span className="sidebar_item_text">Social</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
