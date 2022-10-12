import React, { useCallback, useState } from 'react';
import { useAppSelector } from './hooks/hooks';
import { Project } from './model/project';
const App: React.FC = () => {
  const projects = useAppSelector<Project[]>((state) => state.projects);
  return (
    <>
      {projects.map((project) => (
        <div>{project.name}</div>
      ))}
    </>
  );
};

export default App;
