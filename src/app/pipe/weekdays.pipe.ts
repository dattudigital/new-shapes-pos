import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdays'
})
export class WeekdaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let finalValue = '';
    if (value) {
      if (value.includes('0')) {
        finalValue = finalValue + ' sun ,';
      }
      if (value.includes('1')) {
        finalValue = finalValue + ' mon ,';
      }
      if (value.includes('2')) {
        finalValue = finalValue + ' tue ,';
      }
      if (value.includes('3')) {
        finalValue = finalValue + ' wed ,';
      }
      if (value.includes('4')) {
        finalValue = finalValue + ' thu ,';
      }
      if (value.includes('5')) {
        finalValue = finalValue + ' fri ,';
      }
      if (value.includes('6')) {
        finalValue = finalValue + ' sat ';
      }
    }
    finalValue = finalValue.substring(0, finalValue.length - 1);
    return finalValue;
  }
}




