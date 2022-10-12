import { memo } from 'react';
import { Project } from '../../model/project';
import TableItem from './TableItem';

export interface IProjectsTable {
  items: Project[];
}

const ProjectsTable = ({ items }: IProjectsTable) => {
  return (
    <>
      {items.map((item, index) => (
        <TableItem project={item} key={index} />
      ))}
    </>
  );
};

export default memo(ProjectsTable);
