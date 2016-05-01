import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, DashletDataModel} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'info-dashlet',
    templateUrl: '../../tpl/infoDashlet.component.html'
})
export class InfoDashlet
	extends AbstractDashlet<DashletDataModel>
	implements OnInit, OnDestroy {

	@Input() dashletId: string;
	@Input() dashletIconClass: string;
	@Input() dashletIconColor: string;
	private dashletInfo: DashletDataModel;

	constructor(protected _hemiService: HemiService) {
		super(_hemiService);
	}

	handleClick() {
		console.log('Clicked');
		this.dashletInfo = null;
	}

	extractData(model: DataModel) {
		return model.dashletInfo.filter(di => di.dashletId == this.dashletId)[0];
	}

	handleData(data: DashletDataModel) {
		//console.log(this.constructor.name + ": New dashlet data received");
		this.dashletInfo = data;
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}