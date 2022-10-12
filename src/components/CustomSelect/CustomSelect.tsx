import React, { memo } from 'react';
import styles from './CustomSelect.module.sass';

export interface ICustomSelect {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = ({ options, onChange }: ICustomSelect) => {
  return (
    <select onChange={onChange} className={styles.select}>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default memo(CustomSelect);
