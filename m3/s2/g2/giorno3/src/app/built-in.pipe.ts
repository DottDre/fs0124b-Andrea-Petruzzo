import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'builtIn'
})
export class BuiltInPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
