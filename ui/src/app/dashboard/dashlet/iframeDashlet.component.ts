import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'iframe-dashlet',
    template: '<iframe id="{{iframeId}}" [src]="iframeSanitizedSrc"></iframe>',
	styles: [`
	iframe {
		border: none;
		display: block;
		height: 100%;
		width: 100%;
	}
	`]
})
export class IFrameDashlet implements OnInit {

	@Input()
	iframeId: string;

	@Input()
	iframeSrc: string;
	private iframeSanitizedSrc: SafeResourceUrl;

	constructor(private sanitizer: DomSanitizationService) {
	}

	ngOnInit() {
		this.iframeSanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSrc);
	}

}