import {Component, Input, AfterViewInit} from '@angular/core';

@Component({
    selector: 'carousel-item-selector',
    template: `<div class="btn-group" data-toggle="btn-toggle">
					<button *ngFor="let item of items; let idx = index" (click)="handleClick()" attr.data-target="#{{carouselId}}" [ngClass]="{active: activeSlide == idx}" attr.data-slide-to="{{idx}}" class="btn btn-default btn-sm">{{item}}</button>
			   </div>`
})
export class CarouselItemSelector implements AfterViewInit {

	@Input()
	carouselId: string;
	@Input()
	items: string[];
	
	private activeSlide = 0;
	
	private getCarousel(): any {
		return $('#' + this.carouselId);
	}

	private handleClick() {
		this.getCarousel().carousel('pause');
		setTimeout(() => $(window).trigger('resize'), 3000);
		setTimeout(() => this.getCarousel().carousel('cycle'), 15000);
	}
	
	ngAfterViewInit() {
		this.getCarousel().on('slid.bs.carousel', e => {
			this.activeSlide = $('.active', e.target).index();
		});
	}
	

}