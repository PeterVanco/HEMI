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

    public static equalizeDashletHeights(element1: JQuery, element2: JQuery, resizeCallback?: () => void) {
        let equalize = () => {
            if (element1.height() != element2.height()) {
                element2.height(element1.height());
                if (resizeCallback) {
                    resizeCallback();
                }
            }
        };
        equalize();
        new ResizeSensor(element1, equalize);
    }

}