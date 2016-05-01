import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {Camera} from '../../camera';

@Component({
    selector: 'camera-dashlet',
    template: `This is camera {{camId}} image <img src="{{latestSnapshotUrl}}" />`
})
export class CameraDashlet implements OnInit, OnDestroy {

	@Input() camera: Camera;
	private latestSnapshotUrl: string;
	private handler: Subscription;

	constructor(
		private _hemiService: HemiService) {
	}

	getSnapshot() {
		return this._hemiService.getSnapshot(this.camera.id).toPromise().then(resp => {
			this.latestSnapshotUrl = resp;
		});
	}

	ngOnInit() {
		console.log("Setting up camera " + this.camera.id + " interval");
		this.getSnapshot();
		let snapshotUrlProvider: Observable<string> = Observable
			.interval(5000)
			.share()
			.flatMap(() => {
				console.log("Getting snapshot for camera " + this.camera.id);
				return this._hemiService.getSnapshot(this.camera.id);
			})
		this.handler = snapshotUrlProvider.subscribe(resp => {
			this.latestSnapshotUrl = resp;
		});
	}

	ngOnDestroy() {
		this.handler.unsubscribe();
	}

}