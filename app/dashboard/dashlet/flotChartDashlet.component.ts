import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SensorDataModel, SensorTypeEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'chart-dashlet',
    template: `{{data}}<div>Loading chart ...</div>`
})
export class ChartDashlet extends AbstractDashlet<SensorDataModel[]> implements OnInit, OnDestroy, AfterViewInit {

    private chosenInitialized = false;
    private plot: jquery.flot.plot;

    @Input() private options: any;
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
//data.length
        for (let i = 0; i < 1; i++) {
            let series = [];
            console.log(data[i].values.length);
            for (let j = 0; j < data[i].values.length; j++) {
                series.push([data[i].values[j].x, data[i].values[j].y]);
            }
            console.log(series);
            this.setData(series, i);
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
            this.plot = $.plot(plotArea, this.dataset, this.options);
            this.chosenInitialized = true;

            let data = [];
            for (let i = 0; i < 100; i++) {
                data.push([i, Math.random() * 500]);
            }
            this.setData(data, 0);

            // setInterval(() => {
            //     let data = [];
            //     for (let i = 0; i < 100; i++) {
            //         data.push([i, Math.random() * 500]);
            //     }
            //     this.setData(data, 0);
            // }, 1000);
        }

    }

    setData(data, series: number) {
        if (series == null) {
            this.plot.setData(data);
        } else {
            let plotData: jquery.flot.dataSeries[] = this.plot.getData();
            console.log(plotData);
            if (!plotData || series >= plotData.length) {
                console.error("Error setting data to chart");
                return;
            }
            plotData[series].data = data;
            this.plot.setData(plotData);
        }
        this.plot.draw();
        //(this.plot as any).autoScale();
    }

}  