import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'temp' })
export class TempPipe implements PipeTransform {

    transform(value: any): string {
        return value + ' °C';
    }

}