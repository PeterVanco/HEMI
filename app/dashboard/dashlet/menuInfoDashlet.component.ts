import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, DashletDataModel} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'menu-info-dashlet',
    templateUrl: '../../tpl/dashboard/dashlet/menuInfoDashlet.component.html'
})
export class MenuInfoDashlet
	extends AbstractDashlet<DashletDataModel>
	implements OnInit, OnDestroy {

	@Input() dashletId: string;
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
		this.dashletInfo = data;
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}