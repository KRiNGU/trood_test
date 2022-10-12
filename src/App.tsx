import { useCallback, useState } from 'react';
import { useAppSelector } from './hooks/hooks';
import { Filter, Project } from './model/project';
import ProjectsTable from './views/ProjectsTable';
import './resetStyles.sass';

export type ISort =
  | keyof Project
  | '-id'
  | '-name'
  | '-status'
  | '-type'
  | '-conditions'
  | '-volume'
  | '-roi'
  | '-free'
  | '-hedge';

const App = () => {
  const projects = useAppSelector<Project[]>((state) => state.projects);

  const [filter, setFilter] = useState<Filter>({
    status: 'all',
    type: 'all',
  });

  const [sort, setSort] = useState<ISort>('id');

  const onSortChange = useCallback((sort: ISort) => {
    setSort((prev) =>
      prev !== sort || prev[0] === '-' ? sort : (`-${sort}` as ISort)
    );
  }, []);

  const onFilterChange = useCallback((filter: Filter) => {
    setFilter(filter);
  }, []);

  const onBuyClick = useCallback((id: number) => {
    alert('The item you want to buy has id ' + id);
  }, []);

  return (
    <>
      <ProjectsTable
        items={projects}
        filter={filter}
        onFilter={onFilterChange}
        sort={sort}
        onSort={onSortChange}
        onBuy={onBuyClick}
      />
    </>
  );
};

export default App;
