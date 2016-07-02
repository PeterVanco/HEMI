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

        let content: any = $(".content");
        let contentWrapper: any = $(".content-wrapper");

        let equalize = () => {

            let thisDashboard = this;

            var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
            var window_height = $(window).height();

            //Destroy if it exists
            content.slimScroll({
                destroy: true
            }).height("auto");
            //Add slimscroll
            content.slimScroll({
                height: (window_height - neg) + 'px'
            });

            let contentHeight = contentWrapper.height();
            contentWrapper.find(".box").each(function (index) {
                let headerHeight = $(this).find(".box-header").height();
                $(this).find(".box-body").height(contentHeight / thisDashboard.charts.length - (75 + headerHeight));
            });
            this.charts.forEach(chart => chart.getPlot() && chart.getPlot().reflow());
        };
        equalize();
        new ResizeSensor(contentWrapper, equalize);
    }

}