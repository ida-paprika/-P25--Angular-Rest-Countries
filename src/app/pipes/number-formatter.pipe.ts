import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {

  transform(value: number): string {
    const FORMATER = new Intl.NumberFormat('en-US');
    return FORMATER.format(value);
  }

}
