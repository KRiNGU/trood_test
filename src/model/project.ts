export type Status = 'green' | 'red' | 'yellow';

export type Project = {
  id: number;
  name: string;
  status: Status;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
};
