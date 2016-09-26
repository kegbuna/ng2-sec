import { Component } from '@angular/core';
import { SecRssService } from './shared/sec-rss.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SecRssService]
})
export class AppComponent {

}
