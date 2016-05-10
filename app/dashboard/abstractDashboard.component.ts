import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {DataModel, SensorTypeEnum} from '../service/data.model';

export abstract class AbstractDashboard implements OnInit, OnDestroy {

	sensorType = SensorTypeEnum;

	ngOnInit() {

	}

	ngOnDestroy() {

	}

	protected getDashboardName(): string {
		return (this.constructor as any).name;
	}

}