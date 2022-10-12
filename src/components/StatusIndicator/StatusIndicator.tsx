import { memo } from 'react';
import { Status } from '../../model/project';

export interface IStatusIndicator {
  status: Status;
}

const StatusIndicator = ({ status }: IStatusIndicator) => {
  return (
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="3" fill={status} />
    </svg>
  );
};

export default memo(StatusIndicator);
