import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strReplace'
})
export class StrReplacePipe implements PipeTransform {

  transform(value: any, from: any, to: any): any {
    value = value || '';
    from = from || '';
    to = to || '';

    return value.split(from).join(to);
  }

}
