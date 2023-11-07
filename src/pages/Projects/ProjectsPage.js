import BaseSnowAppContainer from '../../components/BaseSnowAppContainer/BaseSnowAppContainer';
import ProjectStatusTasks from './ProjectStatusTasks';
import ProjectsCards from './ProjectsCards';
import ProjectChart from './ProjectChart';

const ProjectsPage = () => {
  return (
    <BaseSnowAppContainer>
      <div style={{ margin: '29px' }}>
        <h3>Projects</h3>
        <ProjectsCards />
        <ProjectStatusTasks />
        <ProjectChart />
      </div>
    </BaseSnowAppContainer>
  );
};

export default ProjectsPage;
