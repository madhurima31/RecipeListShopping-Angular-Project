import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None   // view encapsulation
})
export class AppComponent {
  loadedfeature = 'Recipe';
  title = 'app';
  onNavigate(feature: string) {
    this.loadedfeature = feature ;

  }
}
