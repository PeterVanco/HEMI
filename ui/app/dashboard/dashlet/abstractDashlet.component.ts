import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorTypeEnum} from '../../service/data.model';

export abstract class AbstractDashlet<T> implements OnInit, OnDestroy {

	private handler: Subscription;
	private sensorType = SensorTypeEnum;

	constructor(protected _hemiService: HemiService) { }

	abstract handleData(data: T);

	abstract extractData(model: DataModel): T;

	ngOnInit() {
		this.registerObserver();
	}

	protected registerObserver() {
		console.log(this.getDashletName() + ": Registering observer");

		this.handler = this._hemiService.getObservableData(data => this.processDataByDashletImplementation(data));
	}

	private processDataByDashletImplementation(data: DataModel) {
		try {
			let extractedData: T = this.extractData(data);
			this.handleData(extractedData);
		} catch (ex) {
			console.log(this.getDashletName() + ": Error while processing data: " + ex);
		}
	}

	protected triggerLastData() {
		this.processDataByDashletImplementation(this._hemiService.getLastData());
	}

	ngOnDestroy() {
		this.handler.unsubscribe();
	}

	protected getDashletName(): string {
		return (this.constructor as any).name;
	}

}