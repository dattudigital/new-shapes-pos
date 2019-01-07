import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesorno'
})
export class YesornoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let yesornoValue
    if (value == '0') {
      yesornoValue = 'n'
    }
    if (value == '1') {
      yesornoValue = 'y'
    }
    return yesornoValue;
  }
}
