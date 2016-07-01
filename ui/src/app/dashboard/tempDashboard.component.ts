import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AbstractDashboard} from './abstractDashboard.component';
import {ChartDashlet} from './dashlet/chartDashlet.component';
import {ChartDashletRangeSelector} from './dashlet/control/chartDashletRangeSelector.component';

@Component({
    selector: 'temp-dashboard',
    templateUrl: '/src/tpl/dashboard/tempDashboard.component.html',
    directives: [ChartDashlet, ChartDashletRangeSelector]
})
export class TempDashboard extends AbstractDashboard implements AfterViewInit {

    private name: string;

    @ViewChild('indoorTemperatureChart')
    indoorTemperatureChart: ChartDashlet;

    @ViewChild('outdoorTemperatureChart')
    outdoorTemperatureChart: ChartDashlet;

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.setFullHeight();
        $(window).resize(e => this.setFullHeight());
    }

    private setFullHeight() {
        $(".box-body-temp-indoor").height(($(".content-wrapper").height() - 150) / 2);
        $(".box-body-temp-outdoor").height(($(".content-wrapper").height() - 150) / 2);
        if (this.indoorTemperatureChart.getPlot()) {
            this.indoorTemperatureChart.getPlot().reflow();
        }
        if (this.outdoorTemperatureChart.getPlot()) {
            this.outdoorTemperatureChart.getPlot().reflow();
        }
    }

}