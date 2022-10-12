import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusIndicator from '../../../components/StatusIndicator';
import { Project } from '../../../model/project';
import styles from './TableItem.module.sass';

export interface ITableItem {
  project: Project;
  onBuy: () => void;
  id: number;
}

const TableItem = ({ project, onBuy, id }: ITableItem) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onBuy();
    },
    [onBuy]
  );

  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/project/${id}`)}
      className={`${styles.div} ${styles[`theme-${project.status}`]}`}
    >
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
        <span className={styles.cellText}>
          $ {Intl.NumberFormat().format(project.volume)}
        </span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>
          {Intl.NumberFormat().format(project.roi)} %
        </span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>
          {Intl.NumberFormat().format(project.free)}
        </span>
      </td>
      <td className={styles.cell}>
        <span className={styles.cellText}>
          {Intl.NumberFormat().format(project.hedge)} %
        </span>
      </td>
      <td className={`${styles.buttonCell} ${styles.cell}`}>
        <button onClick={handleClick} className={styles.button}>
          Buy
        </button>
      </td>
    </tr>
  );
};

export default memo(TableItem);
