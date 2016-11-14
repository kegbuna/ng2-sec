import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RssFeed } from './models/rss-feed';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BASE, PRESS_RELEASES, SPEECHES } from './urls';

const GOV_READER = BASE + '/govreader/directory';

@Injectable()
export class SecRssService {

  constructor(private http: Http) {
  }

  /**
   * Returns the directory listings. If department is specified, returns the links for that department. If a department
   * is specified, it will return that department's listings. If an index is specified, it will get the actual feed
   * @param {string} [department] - Must be provided if feedIndex. Specifies the department who's feed is being listed
   * @param {number} [feedIndex] - Specifies the index of the feed to retrieve
   * @returns {Observable<R>}
   */
  getDirectory(department?: string, feedIndex?: number): Observable<any> {
    return this.http.get(GOV_READER + `${department ? department + '/' : ''}${!isNaN(feedIndex) ? feedIndex + '/' : ''}`)
        .map((res: Response) => {
          return res.json();
        })
        .catch((err: any) => {
          console.error(err);
          return Observable.throw(err);
        });
  }

  /**
   * Retrieves the current press releases for the SEC
   * @returns {Observable<R>}
   * @deprecated
   */
  getPressReleases(): Observable<RssFeed> {
    return this.http.get(BASE + PRESS_RELEASES)
        .map((res: Response) => {
          return res.json();
        })
        .catch((err: any) => {
          console.error(err);
          return Observable.throw(err);
        });
  }

  /**
   * Retrieves the current speeches for the SEC
   * @returns {Observable<R>}
   * @deprecated
   */
  getSpeeches(): Observable<RssFeed> {
    return this.http.get(BASE + SPEECHES)
        .map((res: Response) => {
          return res.json();
        })
        .catch((err: any) => {
          console.error(err);
          return Observable.throw(err);
        });
  }
}
