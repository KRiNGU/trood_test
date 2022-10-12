import { memo } from 'react';
import CustomSelect from '../../../components/CustomSelect';
import styles from './TableHeader.module.sass';

const TableHeader = () => {
  return (
    <tr className={styles.header}>
      <td className={styles.cell}>
        <CustomSelect
          options={['all', 'gre', 'red', 'yel']}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
          }
        />
        Project
      </td>
      <td className={styles.cell}>
        <CustomSelect
          options={['all', 'TRST', 'THT', 'THC']}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
          }
        />
        Token type
      </td>
      <td className={styles.cell}>Conditions</td>
      <td className={styles.cell}>Volume</td>
      <td className={styles.cell}>ROI</td>
      <td className={styles.cell}>Free float</td>
      <td className={styles.cell}>Insurance hedge</td>
      <td className={styles.cell}></td>
    </tr>
  );
};

export default memo(TableHeader);
