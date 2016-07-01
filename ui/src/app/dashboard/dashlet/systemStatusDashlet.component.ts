import {Component, Input, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, SystemStatusEnum} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

interface SystemStatsMapping {
	status: SystemStatusEnum;
	resolvedStyle: string;
}

@Component({
    selector: 'system-status-dashlet',
    template: '<div class="pull-left status"><i class="fa fa-circle {{systemStatus}}"></i></div>'
})
export class SystemStatusDashlet extends AbstractDashlet<SystemStatusEnum> implements OnInit, OnDestroy {

	private systemStatus: string;
	private systemStatusMapper: SystemStatsMapping[] = [{ status: SystemStatusEnum.READY, resolvedStyle: "text-success" },
		{ status: SystemStatusEnum.ARMED, resolvedStyle: "text-error" },
		{ status: SystemStatusEnum.UNKNOWN, resolvedStyle: "text-warning" }];

	constructor(protected _hemiService: HemiService) {
		super(_hemiService);
	}

	extractData(model: DataModel) {
		return model.systemStatus;
	}

	handleData(data: SystemStatusEnum) {
		this.systemStatus = this.systemStatusMapper.filter(ssm => SystemStatusEnum[ssm.status] == data.toString()).map(ssm => ssm.resolvedStyle)[0];
		console.log(this.systemStatus);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}