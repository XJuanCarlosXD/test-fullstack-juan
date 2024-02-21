import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private newElementSubject = new Subject<void>();

  newElement$ = this.newElementSubject.asObservable();

  emitNewElement() {
    this.newElementSubject.next();
  }
}
