import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goalsSubject = new BehaviorSubject<any>(['First goal', 'Second goal']);
  goals = this.goalsSubject.asObservable();

  constructor() { }

  changeGoals(goals) {
    this.goalsSubject.next(goals);
  }
}
