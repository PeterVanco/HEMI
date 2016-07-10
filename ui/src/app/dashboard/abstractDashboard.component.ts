import {Component, Input, AfterViewInit} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {DataModel, SensorTypeEnum} from '../service/data.model';

declare var ResizeSensor: any;

export abstract class AbstractDashboard implements AfterViewInit {

    sensorType = SensorTypeEnum;

    ngAfterViewInit() {
        (window as any).pauseCarousels = () => ($('.carousel') as any).carousel('pause');
        ($('.carousel') as any).carousel();
    }

    protected getDashboardName(): string {
        return (this.constructor as any).name;
    }

    public static addResizeListener(element: JQuery, resizeCallback?: () => void) {
        resizeCallback();
        new ResizeSensor(element, resizeCallback);
    }

    public static equalizeDashletHeights(element1: JQuery, element2: JQuery, resizeCallback?: () => void) {
        let equalize = () => {
            if (element1.height() != element2.height()) {
                element2.height(element1.height());
                if (resizeCallback) {
                    resizeCallback();
                }
            }
        };
        this.addResizeListener(element1, equalize);
    }

    protected initSlimScroll(contentResizeCallback: (JQuery) => void) {

        let content: any = $(".content");
        let contentWrapper = $(".content-wrapper");

        let reinitSlimScroll = () => {
            let neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
            let window_height = $(window).height();
            //Destroy if it exists
            content.slimScroll({
                destroy: true
            }).height("auto");
            console.info("Initializing slimScroll to ", (window_height - neg) + 'px');
            //Add slimscroll
            content.slimScroll({
                height: (window_height - neg) + 'px'
            });
        };

        AbstractDashboard.addResizeListener(contentWrapper, () => {
            reinitSlimScroll();
            contentResizeCallback(contentWrapper);
        });

    }

}