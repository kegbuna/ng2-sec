import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'keys'})

export class KeysPipe implements PipeTransform {
  transform(value: Object): any {
    let objects = [];
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const item = value[key];
        item.key = key;
        objects.push(item);
      }
    }
    return objects;
  }
};
