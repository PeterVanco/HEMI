import {Component, Input, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'menu-info-dashlet',
    template: '<span class="label label-primary pull-right {{dashletIconColor}}">{{sensorData?.latestValue}}</span>'
})
export class MenuInfoDashlet
	extends AbstractDashlet<SensorDataModel>
	implements OnInit, OnDestroy {

	@Input() dashletId: string;
	@Input() dashletType: SensorTypeEnum;
	@Input() dashletIconColor: string;
	private sensorData: SensorDataModel;

	constructor(protected _hemiService: HemiService) {
		super(_hemiService);
	}

	handleClick() {
		console.log('Clicked');
		this.sensorData = null;
	}

	extractData(model: DataModel) {
		return model.sensors.filter(di => di.id == this.dashletId && di.type.toString() == SensorTypeEnum[this.dashletType])[0];
	}

	handleData(data: SensorDataModel) {
		this.sensorData = data;
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}