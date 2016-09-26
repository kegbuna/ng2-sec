import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RssFeed } from './models/rss-feed';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BASE, PRESS_RELEASES, SPEECHES } from './urls';

@Injectable()
export class SecRssService {

  constructor(private http: Http) {
  }

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
