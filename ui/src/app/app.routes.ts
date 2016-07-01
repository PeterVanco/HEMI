import {MainDashboard} from './dashboard/mainDashboard.component';
import {TempDashboard} from './dashboard/tempDashboard.component';
import {HumidityDashboard} from './dashboard/humidityDashboard.component';
import {SunshineDashboard} from './dashboard/sunshineDashboard.component';
import {SecurityDashboard} from './dashboard/securityDashboard.component';
import {RadarDashboard} from './dashboard/radarDashboard.component';
import {CameraDashboard} from './dashboard/cameraDashboard.component';
import {SingleCameraDashboard} from './dashboard/singleCameraDashboard.component';


export const APP_ROUTES = [

    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'dashboard',
        component: MainDashboard
    },
    {
        path: 'teplota',
        component: TempDashboard
    },
    {
        path: 'vlhkost',
        component: HumidityDashboard
    },
    {
        path: 'slnecnost',
        component: SunshineDashboard
    },
    {
        path: 'zabezpecenie',
        component: SecurityDashboard
    },
    {
        path: 'radar',
        component: RadarDashboard
    },
    {
        path: 'kamery',
        component: CameraDashboard
    },
    {
        path: 'kamera/:cameraRoute',
        component: SingleCameraDashboard
    }
];