import {Component} from '@angular/core';

@Component({
    selector: 'current-time',
    template: `{{ time | date:'HHmm'}}`
})
export class CurrentTime {  
    
    private time: Date;

    constructor() {
        this.time = new Date();  
        setInterval(() => this.time = new Date(), 1000);
    }

}