import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Musician } from '../musician.model';

@Component({
  selector: 'app-musician-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss'],
})
export class MusicianListComponent {
  @Input() musicians: Musician[] = [];
}
