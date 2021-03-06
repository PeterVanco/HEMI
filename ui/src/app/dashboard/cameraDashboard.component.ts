import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {AbstractCameraDashboard} from './AbstractCameraDashboard.component';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {StorageInfoDashlet} from './dashlet/storageInfoDashlet.component';
import {CameraTimelineDashlet} from './dashlet/cameraTimelineDashlet.component';
import {HemiService} from '../service/hemiService.service';

@Component({
    selector: 'camera-dashboard',
    templateUrl: '/src/tpl/dashboard/cameraDashboard.component.html',
    directives: [CameraDashlet, StorageInfoDashlet, CameraTimelineDashlet],
})
export class CameraDashboard extends AbstractCameraDashboard {

}