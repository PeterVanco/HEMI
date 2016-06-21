import {Component, ElementRef, Input, AfterViewInit} from 'angular2/core';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractChartDashlet} from './abstractChartDashlet.component';
import {Observable} from 'rxjs/Rx';
import {Http} from 'angular2/http';

@Component({
    selector: 'chart-dashlet',
    template: `<div class="chart">Loading chart ...</div>`
})
export class ChartDashlet extends AbstractChartDashlet<SensorDataModel[]> {

    constructor(protected el: ElementRef,
        protected _hemiService: HemiService,
        protected http: Http) {
        super(el, _hemiService, http);
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

}  