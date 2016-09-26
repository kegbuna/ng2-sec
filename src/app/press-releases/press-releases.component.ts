import { Component, OnInit } from '@angular/core';
import { SecRssService } from '../shared/sec-rss.service';
import  { RssFeed } from '../shared/models/rss-feed';
import { Item } from '../shared/models/item';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.css']
})
export class PressReleasesComponent implements OnInit {

  items: Item[];
  itemHtml: any;
  itemPubDate: Date;

  constructor(private secService: SecRssService, private domSanitizer: DomSanitizer ) {
  }

  ngOnInit() {
    this.getReleases();
  }

  getReleases() {
    this.secService.getPressReleases()
        .subscribe((data: RssFeed) => {
          this.items = data.items;
        });
  }

  selectItem(item: Item) {
    this.itemPubDate = new Date(item.pubdate);
    this.itemHtml = this.domSanitizer.bypassSecurityTrustHtml(item.description);
  }
}
