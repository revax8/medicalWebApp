import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToYesNot'
})
export class ConvertToYesNotPipe implements PipeTransform {

  transform(value: boolean): string
   {
    if (value){
      console.log('entro yes')
      return 'Yes';
    }
    else {
      console.log('entro no')
      return 'No'
    }

    return '';
  }

}
