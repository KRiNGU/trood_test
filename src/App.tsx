import { useCallback, useState } from 'react';
import { useAppSelector } from './hooks/hooks';
import { Project } from './model/project';
import ProjectsTable from './views/ProjectsTable';
const App = () => {
  const projects = useAppSelector<Project[]>((state) => state.projects);

  return (
    <>
      <ProjectsTable items={projects} />
    </>
  );
};

export default App;
