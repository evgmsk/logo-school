import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'string') {
      return value;
    }
    const newValue = value.substring(0, args[0]) + ' ...';
    return newValue;
  }

}
