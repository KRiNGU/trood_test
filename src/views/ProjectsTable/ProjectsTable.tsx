import { memo, useCallback } from 'react';
import { Filter, Project, Status, Type } from '../../model/project';
import TableItem from './TableItem';
import styles from './ProjectsTable.module.sass';
import TableHeader from './TableHeader';
import { ISort } from '../../App';

export interface IProjectsTable {
  items: Project[];
  filter: Filter;
  onFilter: (filter: Filter) => void;
  sort: ISort;
  onSort: (sort: ISort) => void;
  onBuy: (id: number) => void;
}

const ProjectsTable = ({
  items,
  filter,
  onFilter,
  sort,
  onSort,
  onBuy,
}: IProjectsTable) => {
  let sortedItems = [...items];

  const isSortDecs = sort[0] === '-';
  const sortedField: keyof Project =
    sort[0] === '-'
      ? (sort.slice(1) as keyof Project)
      : (sort as keyof Project);

  sortedItems.sort((a, b) =>
    a[sortedField] > b[sortedField]
      ? 1
      : a[sortedField] === b[sortedField]
      ? 0
      : -1
  );

  if (isSortDecs) {
    sortedItems = sortedItems.reverse();
  }

  if (filter.status !== 'all' || filter.type !== 'all') {
    sortedItems = sortedItems.filter(
      (item) =>
        (filter.status === 'all' || filter.status === item.status) &&
        (filter.type === 'all' || filter.type === item.type)
    );
  }

  const handleSortClick = useCallback(
    (sort: string) => {
      onSort(sort as ISort);
    },
    [onSort]
  );

  const handleTypeFilterChange = useCallback(
    (value: Type) => {
      onFilter({ status: filter.status, type: value });
    },
    [onFilter, filter.status]
  );

  const handleStatusFilterChange = useCallback(
    (value: Status) => {
      onFilter({ status: value, type: filter.type });
    },
    [onFilter, filter.type]
  );

  return (
    <table className={styles.table}>
      <thead>
        <TableHeader
          onSort={handleSortClick}
          onTypeFilter={handleTypeFilterChange}
          onStatusFilter={handleStatusFilterChange}
        />
      </thead>
      <tbody>
        {sortedItems.map((item, index) => (
          <TableItem
            id={item.id}
            project={item}
            key={index}
            onBuy={() => onBuy(item.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default memo(ProjectsTable);
