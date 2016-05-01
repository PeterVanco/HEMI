import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel} from '../../service/data.model';

export abstract class AbstractDashlet<T> implements OnInit, OnDestroy {

	private handler: Subscription;

	constructor(protected _hemiService: HemiService) {

	}

	abstract handleData(data: T);

	abstract extractData(model: DataModel): T;

	ngOnInit() {
		console.log(this.getDashletName() + ": Registering observer");
		this.handler = this._hemiService.getInfoObservable().subscribe(model => {
			console.log(this.getDashletName() + ": New dashlet data received");
			let data: T = this.extractData(model);
			this.handleData(data);
		});
	}

	ngOnDestroy() {
		this.handler.unsubscribe();
	}
	
	protected getDashletName(): string {
		return (this.constructor as any).name;
	}

}