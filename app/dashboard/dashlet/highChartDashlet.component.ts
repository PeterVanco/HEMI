import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
// import {Highcharts} from 'highcharts/highcharts'
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'chart-dashlet',
    template: `{{data}}<div id="chart-container">Loading chart ...</div>`
})
export class ChartDashlet extends AbstractDashlet<SensorDataModel[]> implements OnInit, OnDestroy, AfterViewInit {

    private chosenInitialized = false;
    private plot: HighchartsChartObject;

    @Input() private dataset: any;
    @Input() private width: string;
    @Input() private height: string;

    constructor(public el: ElementRef,
        protected _hemiService: HemiService) {
        super(_hemiService);

    }

    extractData(model: DataModel) {
        return model.sensors;
    }

    handleData(data: SensorDataModel[]) {

        if (!this.chosenInitialized) {
            return;
        }

        for (let i = 0; i < data.length; i++) {

            let thisData = data[i];
            let series = this.plot.series.filter(s => s.name == thisData.name)[0];
            if (series == null) {
                console.debug("Creating new series: " + thisData.name);
                let newSeries: HighchartsIndividualSeriesOptions = {};
                newSeries.name = thisData.name;
                this.plot.addSeries<HighchartsIndividualSeriesOptions>(newSeries, true, true);
                series = this.plot.series.filter(s => s.name == thisData.name)[0];
            }

            let seriesData: [number, number][] = [];
            for (let j = 0; j < data[i].values.length; j++) {
                seriesData.push([data[i].values[j].x, data[i].values[j].y]);
            }
            this.setData(seriesData, thisData.name);
        }
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    ngAfterViewInit() {
        if (!this.chosenInitialized) {
            let plotArea = $(this.el.nativeElement).find('div').empty();
            plotArea.css({
                width: this.width,
                height: this.height
            });
            this.chosenInitialized = true;
        }

    }

    initialize(options: HighchartsOptions) {
        console.warn("Initializing chart");
        console.warn(options);
        this.plot = new Highcharts.Chart(options);

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