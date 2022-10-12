import { memo } from 'react';
import { Project } from '../../model/project';

export interface IProjectsTable {
  items: Project[];
}

const ProjectsTable = ({ items }: IProjectsTable) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
};

export default memo(ProjectsTable);
