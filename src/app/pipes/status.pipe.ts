import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {


  
  transform(value: any, filterString: string, filterField: string): any {
    // if(typeof value != undefined && filterString === '' ){
    //     return value;
    // }

  let returnArray: { title: boolean; }[] = [];

  for (const item of value) {
    let filterItem = item[filterField].toLowerCase()
    let filterStringCase = filterString.toLowerCase()
    if(filterStringCase.includes(filterItem)){
      returnArray.push(item);
    }
  }
  return returnArray ;
  }
}
