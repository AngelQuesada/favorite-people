import { Subject } from 'rxjs';
import type { Observable } from 'rxjs';

export class SubjectManager<T> {
  private readonly subject = new Subject<T>();

  get getSubject() : Observable<T> {
    return this.subject.asObservable();
  }

  // eslint-disable-next-line accessor-pairs
  set setSubject(value: T) {
    this.subject.next(value);
  }
}