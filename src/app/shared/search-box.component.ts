import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="input-group">
      <input
        type="text"
        placeholder="e.g. Jimi"
        [formControl]="queryControl"
        (keyup.enter)="onSearch()"
      />
      <button (click)="onSearch()">Search</button>
    </div>
  `,
})
export class SearchBoxComponent {
  readonly queryControl = new FormControl('', { nonNullable: true });

  @Output() search = new EventEmitter<string>();

  onSearch(): void {
    const query = this.queryControl.value.trim().toLowerCase();
    this.search.emit(query);
  }
}
