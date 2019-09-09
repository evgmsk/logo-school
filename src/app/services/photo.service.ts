import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, combineLatest, concat} from 'rxjs';
import {zip, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor (private http: HttpClient) {}
  // getPersons(n) {
  //   return this.http.get(`https://randomuser.me/api/?count=${n}`).pipe(
  //     map(x => {
  //       console.log(x);
  //       return x;
  //       }
  //     )
  //   )
  // }
  getPerson() {
    return this.http.get('https://randomuser.me/api').pipe(map(x => {
      const {name, position, picture:{thumbnail}} = x['results'][0];
      return {name, position, image: thumbnail};
    }));
  }
  getAll(n: number = 1) {
    if (n < 1)
      return this.getPerson();
    const res = new Array(n-1).fill(1).reduce((acc, x) => {
        acc = combineLatest(acc, this.getPerson(), (x, y) => {
            return Array.isArray(x) ? [...x, y] : [x, y];
        });
        return acc;
    }, this.getPerson());
    res.subscribe(r => console.log(r));
    return res;
  }
}
