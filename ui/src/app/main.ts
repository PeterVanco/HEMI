import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {provideRouter} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {HTTP_PROVIDERS} from '@angular/http';
import {HemiService} from './service/hemiService.service';

bootstrap(AppComponent, [provideRouter(APP_ROUTES), HTTP_PROVIDERS, HemiService]);
