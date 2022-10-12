import { memo } from 'react';
import StatusIndicator from '../../../components/StatusIndicator';
import { Project } from '../../../model/project';
import styles from './TableItem.module.sass';

export interface ITableItem {
  project: Project;
}

const TableItem = ({ project }: ITableItem) => {
  return (
    <tr className={`${styles.div} ${styles[`theme-${project.status}`]}`}>
      <td className={styles.cell}>
        <StatusIndicator status={project.status} />
        <span className={styles.cellText}>{project.name}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>{project.type}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>{project.conditions}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>$ {project.volume}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>{project.roi} %</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>{project.free}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>{project.hedge} %</span>
      </td>
      <td className={`${styles.buttonCell} ${styles.cell}`}>
        <button className={styles.button}>Buy</button>
      </td>
    </tr>
  );
};

export default memo(TableItem);
