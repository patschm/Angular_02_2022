import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dutch'
})
export class DutchPipe implements PipeTransform {

  transform(value: any, args?: any): any 
  {
    return (args + value).replace(/[,]/gi, '').replace(/[.]/gi, args);
  }

}
