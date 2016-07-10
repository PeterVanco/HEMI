import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {AbstractDashboard} from './abstractDashboard.component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'security-dashboard',
    templateUrl: '/src/tpl/dashboard/securityDashboard.component.html',
    directives: [],
    styles: [`
    canvas {
        width: 100%;
        height: 100%;
    }
    `]
})
export class SecurityDashboard extends AbstractDashboard implements AfterViewInit {

    constructor(protected element: ElementRef) {
        super();
    }

    ngAfterViewInit() {

        let canvas: HTMLCanvasElement = $(this.element.nativeElement).find('canvas')[0] as any;

        super.initSlimScroll(contentWrapper => {
            let thisDashboard = this;
            let contentHeight = contentWrapper.height();
            contentWrapper.find(".box").each(function (index) {
                let headerHeight = $(this).find(".box-header").height();
                $(this).find(".box-body").height(contentHeight - (80 + headerHeight));
            });

            this.redraw(canvas);
        });

        // AbstractDashboard.addResizeListener($('.content-wrapper'), () => {
        //     let contentPadding = $(".content").outerHeight() - $(".content").height();
        //     $(".box-body").outerHeight($(".content-wrapper").height() - $(".box-header").outerHeight() - contentPadding - 20);
        // });
    }

    public redraw(canvas: HTMLCanvasElement) {

        let ctx = canvas.getContext("2d");

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        let width = canvas.width;
        let height = canvas.height;

        ctx.beginPath();
        ctx.translate(0.5, 0.5);
        ctx.moveTo(width / 10, height / 10);
        ctx.lineTo(width - width / 10, height - height / 10);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();

    }

}