import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {HemiService} from './service/hemiService.service';

bootstrap(AppComponent, [ROUTER_DIRECTIVES, HTTP_PROVIDERS, HemiService]);
