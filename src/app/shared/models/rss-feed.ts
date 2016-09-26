import { AtomLink } from './atom-link';
import {Item} from './item';

export interface RssFeed {
  type: string;
  title: string;
  link: string;
  'atom:link': AtomLink;
  description: string;
  language: string;
  pubdate: string;
  lastbuilddate: string;
  items: Item[];
}
