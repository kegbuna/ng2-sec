import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: 'category-menu.component.html',
  styleUrls: ['category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categories: Array<Object> = [{
    label: 'Press Releases',
    description: 'Press releases from the SEC.',
    value: 'press_releases',
    route: 'press-releases'
  }, {
    label: 'Speeches',
    description: 'Speeches by the SEC head.',
    value: 'speeches',
    route: 'speeches'
  }];
  constructor() { }

  ngOnInit() {
  }
}
