import { Component } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'distant-study';

  onBreak(e: Event): void {
    console.log(e);
  }
  onNext(e: Event): void {
    console.log(e);
  }
  onDone(e: Event): void {
    console.log(e);
  }
}
