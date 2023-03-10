import { Component } from '@angular/core';
import { MusiciansComponent } from './musicians/musicians.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MusiciansComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
