import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string|undefined, ...args: unknown[]): string {
    if(!value){
      return 'default-profile.png'; // Path to your default image
    }
    return value;
  }

}
