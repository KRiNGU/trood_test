import { memo } from 'react';
import { Project } from '../../model/project';
import TableItem from './TableItem';
import styles from './ProjectsTable.module.sass';
import TableHeader from './TableHeader';

export interface IProjectsTable {
  items: Project[];
}

const ProjectsTable = ({ items }: IProjectsTable) => {
  return (
    <table className={styles.table}>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {items.map((item, index) => (
          <TableItem project={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default memo(ProjectsTable);
