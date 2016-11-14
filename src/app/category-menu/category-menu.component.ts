import { Component, OnInit } from '@angular/core';
import { SecRssService } from '../shared/sec-rss.service';
import { KeysPipe } from '../keys.pipe';

@Component({
  selector: 'app-category-menu',
  templateUrl: 'category-menu.component.html',
  styleUrls: ['category-menu.component.css'],
  providers: [KeysPipe]
})
export class CategoryMenuComponent implements OnInit {
  categories: Array<Object> = [];

  constructor(private directoryService: SecRssService, private keyPipe: KeysPipe) {
  }

  ngOnInit() {
    this.directoryService.getDirectory()
        .subscribe((data: any) => {
          this.categories = this.keyPipe.transform(data);
        });
  }
}
