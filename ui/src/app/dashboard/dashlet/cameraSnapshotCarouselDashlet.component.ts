import {Component, Input, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'camera-snapshot-carousel-dashlet',
    templateUrl: '../../tpl/dashboard/dashlet/cameraSnapshotCarouselDashlet.component.html'
})
export class CameraSnapshotCarouselDashlet extends AbstractDashlet<Camera[]> {

	@Input()
	private carouselId: string;

	private cameras: Camera[];

	constructor(
		protected _el: ElementRef,
		protected _hemiService: HemiService) {
		super(_hemiService);
	}

	extractData(model: DataModel) {
		return model.cameras;
	}

	handleData(data: Camera[]) {
		if (!this.cameras) {
			this.cameras = data;
		} else if (data) {
			data.forEach(camera => {
				let cameraImage = $(this._el.nativeElement).find('.camera-' + camera.route);
				if (cameraImage) {
					cameraImage.attr("src", camera.latestSnapshot.uri);
				}
			});
		}
	}

}