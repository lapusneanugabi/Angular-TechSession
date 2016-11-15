import { Pipe, PipeTransform } from '@angular/core';
/*
 * Usage:
 *   value | dateHand:component
*/
@Pipe({name: 'dateHand'})
export class dateHandPipe implements PipeTransform {
  transform(date: any, component: string): any {
      
      let result = 0;
      if (date) {

        switch(component) {
            case 'H':
                result = 30*(date.getHours()%12) + date.getMinutes()/2
                break;
            case 'm':
                result = 6 * date.getMinutes();
                break;
            case 's':
                result = 6 * date.getSeconds();
                break;
        }         
      }

      return result;
  }
}