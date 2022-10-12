export type Status = 'green' | 'red' | 'yellow';
export type Type = 'TRST' | 'THT' | 'THC';

export type Project = {
  id: number;
  name: string;
  status: Status;
  type: Type;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
};

export type Filter = {
  status: Status | 'all';
  type: Type | 'all';
};
