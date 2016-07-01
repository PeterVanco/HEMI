import {Component, Input, OnInit, OnDestroy, NgZone} from '@angular/core';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'info-dashlet',
    templateUrl: '/src/tpl/dashboard/dashlet/infoDashlet.component.html'
})
export class InfoDashlet extends AbstractDashlet<SensorDataModel> implements OnInit, OnDestroy {

	@Input() dashletId: string;
	@Input() dashletType: SensorTypeEnum;
	@Input() dashletIconClass: string;
	@Input() dashletIconColor: string;
	private sensorData: SensorDataModel;

	constructor(protected _hemiService: HemiService) {
		super(_hemiService);
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