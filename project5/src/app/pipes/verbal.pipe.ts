import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbal'
})
export class VerbalPipe implements PipeTransform {

  digits=[
    'ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'
  ];

  transform(value: number, args?: any): string {
    let str = `${value}`;
    let result='';

    for(let i=0;i<str.length;i++){
      let digit = parseInt(str.charAt(i));
      result=`${result}${this.digits[digit]}`;
    }
    return result;
  }

}
