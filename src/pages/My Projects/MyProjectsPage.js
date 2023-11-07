import BaseSnowAppContainer from '../../components/BaseSnowAppContainer/BaseSnowAppContainer';
import MyProjectsCards from './MyProjectsCards';
import MyProjectName from '../My Projects/MyProjectName';
import './MyProjectsPage.scss';

const MyProjectsPage = () => {
  return (
    <BaseSnowAppContainer>
      <div className="projects">
        <h3>My Projects</h3>
        <MyProjectsCards />
        <MyProjectName />
      </div>
    </BaseSnowAppContainer>
  );
};

export default MyProjectsPage;
