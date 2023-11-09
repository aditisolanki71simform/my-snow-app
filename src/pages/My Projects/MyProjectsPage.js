import MyProjectsCards from './MyProjectsCards';
import MyProjectName from '../My Projects/MyProjectName';
import './MyProjectsPage.scss';

const MyProjectsPage = () => {
  return (
    <div className="projects">
      <h3>My Projects</h3>
      <MyProjectsCards />
      <MyProjectName />
    </div>
  );
};

export default MyProjectsPage;
