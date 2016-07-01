import {Component, ElementRef, Input, AfterViewInit} from '@angular/core';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';

export abstract class AbstractChartDashlet<T> extends AbstractDashlet<T> implements AfterViewInit {

    protected chosenInitialized = false;
    protected plot: HighchartsChartObject;

    @Input() protected dataset: any;
    @Input() protected width: string;
    @Input() protected height: string;
    @Input() protected chartSettingsUri: string

    constructor(protected el: ElementRef,
        protected _hemiService: HemiService,
        protected http: Http) {
        super(_hemiService);
    }

    getPlotElement(): JQuery {
        return $(this.el.nativeElement).find('div.chart');
    }

    ngAfterViewInit() {
        if (!this.chosenInitialized) {
            let plotArea = this.getPlotElement().empty();
            plotArea.css({
                width: this.width,
                height: this.height
            });

            this.http.get(this.chartSettingsUri).catch(err => {
                console.warn(err);
                return Observable.throw(err);
            }).subscribe(res => {
                let evil = eval('(' + res.text() + ')');
                this.initialize(evil);
                this.chosenInitialized = true;
                super.triggerLastData();
            });
        }
    }

    initialize(options: HighchartsOptions) {
        console.info("Initializing chart with options:", this.chartSettingsUri, options);
        this.getPlotElement().highcharts(options);
        this.plot = this.getPlotElement().highcharts();

        // let testSeries: HighchartsIndividualSeriesOptions = {};
        // testSeries.name = "Test series";
        // this.plot.addSeries<HighchartsIndividualSeriesOptions>(testSeries, true, true);
        // let data = [];
        // for (let i = 0; i < 100; i++) {
        //     data.push([i, Math.random() * 500]);
        // }

        // this.setData(data, 0);
    }

    setData(data: [number, number][], series: number | string) {
        if (typeof series === "string" && this.plot.series.filter(s => s.name == series)[0] != null) {
            this.plot.series.filter(s => s.name == series)[0].setData(data, true, true, true);
        } else if (typeof series === "number" && series >= this.plot.series.length) {
            this.plot.series[series].setData(data, true, true, true);
        } else {
            console.error("Error setting data to chart");
            return;
        }
    }

    public getPlot(): HighchartsChartObject {
        return this.plot;
    }

}  