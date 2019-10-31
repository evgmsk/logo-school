import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getPersons(n: number = 1) {
    return this.http.get(`https://randomuser.me/api/?results=${n}`).pipe(map(x => {
      console.log(x);
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
  // getAll(n: number = 1) {
  //   // if (n < 1) {
  //     return this.getPersons(n);
  //   // }
  //   // this.result$ = new Array(n - 1).fill(1).reduce((acc: Observable<any>, i: Observable<any>) => {
  //   //     acc = combineLatest(acc, this.getPerson(), (x: Observable<any>, y: Observable<any>) => {
  //   //         return Array.isArray(x) ? [...x, y] : [x, y];
  //   //     });
  //   //     return acc;
  //   // }, this.getPerson());
  //   return this.result$;
  // }
}
