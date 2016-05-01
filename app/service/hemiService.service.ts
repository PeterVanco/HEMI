import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Camera} from '../camera';
import {DataModel} from './data.model';

@Injectable()
export class HemiService {

    private _cameras: Camera[] = [];
    private _infoProvider: Observable<DataModel>;

    constructor(private http: Http) {
        this._cameras.push(new Camera(1, "Zahrada", "snapUrl", "zahrada"), new Camera(2, "Predzahrada", "snapUrl", "predzahrada"), new Camera(3, "Vstupna hala", "snapUrl", "vstupna-hala"));

        console.log("Setting up info update interval");
        this._infoProvider = Observable
            .timer(1, 5000)
            .flatMap(() => {
                console.log("Getting info update");
                return this.getInfo();
            }).share();
    }

    getSnapshot(camId: number): Observable<string> {
        return this.http.get("http://localhost/hemi/interface/?getSnapshot&camId=" + camId)
            .map(res => {
                return res.text();
            });
    }

    getInfo() {
        return this.http.get("http://localhost/hemi/interface/?getInfo")
            .map(res => {
                return res.json();
            });
    }

    getInfoObservable() {
        return this._infoProvider;
    }

    get cameras(): Camera[] {
        return this._cameras;
    }

    public getCameraByRoute(route: string): Camera {
        return this._cameras.filter(camera => camera.route == route)[0];
    }

}