import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) {}
  getPersons(n: number = 1) {
    return this.http.get(`https://randomuser.me/api/?results=${n}`).pipe(map(x => {
      // tslint:disable-next-line:no-string-literal
      return x['results'].map((y: {[propName: string]: any}) => {
        const {name, picture: {thumbnail}} = y;
        return {name, image: thumbnail};
      });
    }),
    catchError(error => {
      console.warn(error.error);
      return error;
    }));
  }
}
