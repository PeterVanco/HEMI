import {Component, ElementRef, Input, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'chart-dashlet',
    template: `{{data}}<div>Loading chart ...</div>`
})
export class ChartDashlet implements AfterViewInit {

    private chosenInitialized = false;
    private plot: jquery.flot.plot;

    @Input() private options: any;
    @Input() private dataset: any;
    @Input() private width: string;
    @Input() private height: string;

    constructor(public el: ElementRef) { }

    ngAfterViewInit() {
        if (!this.chosenInitialized) {
            let plotArea = $(this.el.nativeElement).find('div').empty();
            plotArea.css({
                width: this.width,
                height: this.height
            });
            this.plot = $.plot(plotArea, this.dataset, this.options);
            this.chosenInitialized = true;

            setInterval(() => {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push([i, Math.random() * 500]);
                }
                this.setData(data, 0);
            }, 1000);
        }

    }

    setData(data, series: number) {
        if (series == null) {
            this.plot.setData(data);
        } else {
            let plotData: jquery.flot.dataSeries[] = this.plot.getData();
            plotData[series].data = data;
            this.plot.setData(plotData);
        }
        this.plot.draw();
    }

}  