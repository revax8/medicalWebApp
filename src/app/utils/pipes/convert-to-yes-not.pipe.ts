import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToYesNot'
})
export class ConvertToYesNotPipe implements PipeTransform {

  transform(value: boolean): string
   {
    if (value){
      return 'Yes';
    }
    else {
      return 'No'
    }
    return '';
  }
}
