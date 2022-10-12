import React, { memo, useCallback } from 'react';
import CustomSelect from '../../../components/CustomSelect';
import { IOption } from '../../../components/CustomSelect/CustomSelect';
import { Status, Type } from '../../../model/project';
import styles from './TableHeader.module.sass';

export interface ITableHeader {
  onSort: (sort: string) => void;
  onTypeFilter: (value: Type) => void;
  onStatusFilter: (value: Status) => void;
}

const statusOptions: IOption[] = [
  { value: 'all', text: 'All' },
  { value: 'green', text: 'grn' },
  { value: 'red', text: 'red' },
  { value: 'yellow', text: 'yel' },
];

const typeOptions: IOption[] = [
  { value: 'all', text: 'All' },
  { value: 'TRST', text: 'TRST' },
  { value: 'THT', text: 'THT' },
  { value: 'THC', text: 'THC' },
];

const TableHeader = ({
  onSort,
  onTypeFilter,
  onStatusFilter,
}: ITableHeader) => {
  const handleSortClick = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement>) => {
      onSort(e.currentTarget.id);
    },
    [onSort]
  );

  // The td's id will show us what sort we are chosing

  return (
    <tr className={styles.header}>
      <td onClick={handleSortClick} id="name" className={styles.cell}>
        <CustomSelect
          options={statusOptions}
          onChange={(value: string) => onStatusFilter(value as Status)}
        />
        Project
      </td>
      <td onClick={handleSortClick} id="type" className={styles.cell}>
        <CustomSelect
          options={typeOptions}
          onChange={(value: string) => onTypeFilter(value as Type)}
        />
        Token type
      </td>
      <td onClick={handleSortClick} id="conditions" className={styles.cell}>
        Conditions
      </td>
      <td onClick={handleSortClick} id="volume" className={styles.cell}>
        Volume
      </td>
      <td onClick={handleSortClick} id="roi" className={styles.cell}>
        ROI
      </td>
      <td onClick={handleSortClick} id="free" className={styles.cell}>
        Free float
      </td>
      <td onClick={handleSortClick} id="hedge" className={styles.cell}>
        Insurance hedge
      </td>
      <td className={styles.cell}></td>
    </tr>
  );
};

export default memo(TableHeader);
