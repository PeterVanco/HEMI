import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {provideRouter} from '@angular/router';
import {AppRoutes} from './appMenu.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {HemiService} from './service/hemiService.service';

bootstrap(AppComponent, [provideRouter(AppRoutes), HTTP_PROVIDERS, HemiService]);
