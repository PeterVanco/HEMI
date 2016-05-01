import {Component} from 'angular2/core';
import {InfoDashlet} from './dashlet/infoDashlet.component';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {ChartDashlet} from './dashlet/chartDashlet.component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'main-dashboard',
    templateUrl: '../tpl/dashboard/mainDashboard.component.html',
    directives: [ChartDashlet, InfoDashlet, CameraDashlet]
})
export class MainDashboard {

	private name: string;
	private splineOptions: any;
	private dataset: any;

  	constructor() {
	    this.name = 'Angular2'
	    this.splineOptions = {
	            series: {
	                lines: { show: true },
	                points: {
	                    radius: 3,
	                    show: true
	                }
	            }
	    };
		this.dataset = [{label: "line1",color:"blue",data: [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]]}];
  	}

}