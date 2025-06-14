import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Premier {
  data=[
    'data1',
    'data2',
    'data3',
    'data4',
  ];
  constructor() { }
  logger(data: any){
    console.log('Premier Logger:', data);
    console.log(this.data);
  }
  addData(data:any){
    this.data.push(data);
  }
}
