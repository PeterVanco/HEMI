import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {AbstractDashboard} from './abstractDashboard.component';
import {SecurityDashlet} from './dashlet/securityDashlet.component'
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'security-dashboard',
    template: '<security-dashlet></security-dashlet>',
    directives: [SecurityDashlet]
})
export class SecurityDashboard extends AbstractDashboard implements AfterViewInit {

    @ViewChild(SecurityDashlet)
    private dashlet: SecurityDashlet;

    ngAfterViewInit() {

        super.initSlimScroll(contentWrapper => {
            let thisDashboard = this;
            let contentHeight = contentWrapper.height();
            contentWrapper.find(".box").each(function (index) {
                let headerHeight = $(this).find(".box-header").height();
                $(this).find(".box-body").height(contentHeight - (80 + headerHeight));
            });

            this.dashlet.redraw();
        });

        // AbstractDashboard.addResizeListener($('.content-wrapper'), () => {
        //     let contentPadding = $(".content").outerHeight() - $(".content").height();
        //     $(".box-body").outerHeight($(".content-wrapper").height() - $(".box-header").outerHeight() - contentPadding - 20);
        // });
    }

}