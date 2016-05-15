import {Component, Input, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {DataModel, SensorTypeEnum} from '../service/data.model';

export abstract class AbstractDashboard implements OnInit, OnDestroy, AfterViewInit {

	sensorType = SensorTypeEnum;

    ngAfterViewInit() {
		(window as any).pauseCarousels = () => ($('.carousel') as any).carousel('pause');
		($('.carousel') as any).carousel();
	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}

	protected getDashboardName(): string {
		return (this.constructor as any).name;
	}

}