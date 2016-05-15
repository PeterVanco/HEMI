import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {Camera} from '../camera';
import {DataModel} from './data.model';

@Injectable()
export class HemiService {

    private _cameras: Camera[] = [];
    private _dataProvider: BehaviorSubject<DataModel> = new BehaviorSubject(null);
    private _infoProvider: Observable<DataModel>;

    constructor(private http: Http) {
        this._cameras.push(new Camera(1, "Zahrada", "snapUrl", "zahrada"), new Camera(2, "Predzahrada", "snapUrl", "predzahrada"), new Camera(3, "Vstupna hala", "snapUrl", "vstupna-hala"));

        console.log("Setting up info update interval");
        this._infoProvider = Observable
            .timer(1, 5000)
            .switchMap(() => {
                console.log("Getting info update");
                return this.getInfo();
            }).share();
        this._infoProvider.subscribe(
            data => {
            },
            error => {
                console.log(error);
            });
    }

    getSnapshot(camId: number): Observable<string> {
        return this.http.get("http://localhost/hemi/interface/?getSnapshot&camId=" + camId)
            .map(res => {
                return res.text();
            });
    }

    getInfo() {
        return this.http.get("http://localhost/hemi/interface/?getInfo&t=" + this.getRequestTimestamp())
            .map(res => {
                let response = res.json();
                this._dataProvider.next(response);
                return response;
            }).catch(this.handleHttpError);
    }

    public handleHttpError(error: any) {
        console.log("Server error");
        let errMsg = error.message;
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    private getRequestTimestamp() {
        return new Date().getTime();
        // return Math.floor(new Date().getTime() / 1000);
        // return this._dataProvider.getValue() ? Math.floor(new Date().getTime() / 1000) : 0;
    }

    getObservableData(callback: (value: DataModel) => void) {
        return this._dataProvider.asObservable().subscribe(data => {
            if (data != null) {
                callback(data);
            }
        },
            error => {
                console.error(error);
            });
    }

    get cameras(): Camera[] {
        return this._cameras;
    }

    public getCameraByRoute(route: string): Camera {
        return this._cameras.filter(camera => camera.route == route)[0];
    }

}