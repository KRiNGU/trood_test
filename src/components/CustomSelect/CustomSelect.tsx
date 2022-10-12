import React, { memo, useCallback } from 'react';
import styles from './CustomSelect.module.sass';

export interface IOption {
  value: string;
  text: string;
}

export interface ICustomSelect {
  options: IOption[];
  onChange: (value: string) => void;
}

const CustomSelect = ({ options, onChange }: ICustomSelect) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <select
      onClick={(e: React.MouseEvent<HTMLSelectElement>) => e.stopPropagation()}
      onChange={handleChange}
      className={styles.select}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default memo(CustomSelect);
