import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import { USER_GET } from './store/profile/profile.actions';
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'app';
=======

  observable$: Observable<{}>;

  constructor(http: Http, store: Store<IAppState>) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());

    store.dispatch({
      type: USER_GET
    });
  }
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f
}
