import {Component, ViewChildren, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AbstractDashboard} from './abstractDashboard.component';
import {ChartDashlet} from './dashlet/chartDashlet.component';
import {ChartDashletRangeSelector} from './dashlet/control/chartDashletRangeSelector.component';

declare var ResizeSensor: any;

@Component({
    selector: 'temp-dashboard',
    templateUrl: '/src/tpl/dashboard/tempDashboard.component.html',
    directives: [ChartDashlet, ChartDashletRangeSelector]
})
export class TempDashboard extends AbstractDashboard implements AfterViewInit {

    private name: string;

    @ViewChildren(ChartDashlet)
    charts: ChartDashlet[];

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.equalizeChartHeights();
    }

    public equalizeChartHeights() {

        super.initSlimScroll(contentWrapper => {
            let thisDashboard = this;
            let contentHeight = contentWrapper.height();
            contentWrapper.find(".box").each(function (index) {
                let headerHeight = $(this).find(".box-header").height();
                $(this).find(".box-body").height(contentHeight / thisDashboard.charts.length - (75 + headerHeight));
            });
            this.charts.forEach(chart => chart.getPlot() && chart.getPlot().reflow());
        });

    }

}