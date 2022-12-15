import { Injectable } from '@angular/core';
import { Musician } from './musician.model';
import { musiciansMock } from './musicians.mock';

@Injectable({ providedIn: 'root' })
export class MusiciansService {
  getAll(): Musician[] {
    return musiciansMock;
  }
}
