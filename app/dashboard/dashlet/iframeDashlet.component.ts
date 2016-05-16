import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'iframe-dashlet',
    template: '<iframe src="{{iframeSrc}}"></iframe>',
	styles: [`
	iframe {
		border: none;
		display: block;
		height: 100%;
		width: 100%;
	}
	`]
})
export class IFrameDashlet {

	@Input()
	iframeSrc: string;

}