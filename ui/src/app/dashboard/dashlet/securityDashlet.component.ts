import {Component, AfterViewInit, ElementRef, Input, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';
import {Subject, BehaviorSubject} from 'rxjs/Rx'

@Component({
    selector: 'security-dashlet',
    templateUrl: '/src/tpl/dashboard/dashlet/securityDashlet.component.html',
	styles: [`
    canvas {
        width: 100%;
        height: 100%;
    }
	`]
})
export class SecurityDashlet extends AbstractDashlet<DataModel> implements OnInit {

	private canvas: HTMLCanvasElement;
	private data: DataModel;

	constructor(protected _hemiService: HemiService,
		protected element: ElementRef) {
		super(_hemiService);
	}

	extractData(model: DataModel) {
		return model;
	}

	handleData(data: DataModel) {
		this.data = data;
		this.redraw();
	}

	ngOnInit() {
		super.ngOnInit();
		this.canvas = $(this.element.nativeElement).find('canvas')[0] as any;
	}

    public redraw() {

		let canvas = this.canvas;
        let ctx = canvas.getContext("2d");

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        let width = canvas.width;
        let height = canvas.height;

        // ctx.scale(0.5, 0.5);

		if (this.data.sensors[0].latestValue > 10) {
			this.drawLine(ctx, width * .1, height * .1, width * .9, height * .1, 'ff0000', 2);
		}
        this.drawLine(ctx, width * .9, height * .1, width * .9, height * .9, '00ff00', 2);

    }

    private drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string = "000000", width: number = 1) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = width;
        ctx.strokeStyle = '#' + color;
        ctx.stroke();
    }

}