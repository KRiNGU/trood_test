import { memo } from 'react';
import { Project } from '../../../model/project';
import styles from './TableItem.module.sass';

export interface ITableItem {
  project: Project;
}

const TableItem = ({ project }: ITableItem) => {
  return <div className={styles.div}>{project.name}</div>;
};

export default memo(TableItem);
