import { Guid } from './guid';

export interface Item {
  title: string;
  link: string;
  description: string;
  guid: Guid;
  pubdate: string;
}
