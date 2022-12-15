import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusiciansService } from './musicians.service';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { SearchBoxComponent } from '../shared/search-box.component';

@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, MusicianListComponent],
  template: `
    <h1>Find Your Favorite Musicians</h1>
    <app-search-box (search)="onSearch($event)"></app-search-box>
    <app-musician-list [musicians]="filteredMusicians"></app-musician-list>
  `,
})
export class MusiciansComponent {
  private readonly musiciansService = inject(MusiciansService);

  readonly musicians = this.musiciansService.getAll();
  filteredMusicians = this.musicians;

  onSearch(query: string): void {
    this.filteredMusicians = this.musicians.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
  }
}
