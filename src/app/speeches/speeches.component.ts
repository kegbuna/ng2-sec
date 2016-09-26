import { Component, OnInit } from '@angular/core';
import { SecRssService } from '../shared/sec-rss.service';
import  { RssFeed } from '../shared/models/rss-feed';
import { Item } from '../shared/models/item';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.css']
})
export class SpeechesComponent implements OnInit {

  items: Item[];
  itemHtml: any;
  itemPubDate: Date;
  itemLink: SafeResourceUrl;

  constructor(private secService: SecRssService, private domSanitizer: DomSanitizer ) {
  }

  ngOnInit() {
    this.getSpeeches();
  }

  getSpeeches() {
    this.secService.getSpeeches()
        .subscribe((data: RssFeed) => {
          this.items = data.items;
        });
  }

  selectItem(item: Item) {
    this.itemPubDate = new Date(item.pubdate);
    this.itemHtml = this.domSanitizer.bypassSecurityTrustHtml(item.description);
    this.itemLink = this.domSanitizer.bypassSecurityTrustResourceUrl(item.link);
  }
}
