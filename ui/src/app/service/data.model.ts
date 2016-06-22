
export class DataModel {

    public version: string;
    public systemStatus: SystemStatusEnum;
    public sensors: SensorDataModel[];
    public cameras: Camera[];
    public storageInfo: StorageInfo;

}

export enum SystemStatusEnum {
    READY,
    ARMED,
    UNKNOWN
}

export class SensorDataModel {

    public id: string;
    public type: SensorTypeEnum;
    public unit: string;
    public name: string;
    public latestValue: number;
    public values: SensorValueDataModel[];

}

export enum SensorTypeEnum {
    TEMP,
    HUMIDITY,
    PIR,
    MAGNETIC,
    UNKNOWN
}

export class SensorValueDataModel {

    public x: number;
    public y: number;

}

export class WeatherDataModel {

}

export class Camera {

    public id: number;
    public name: string;
    public route: string;
    public color: string;
    public snapshotUri: string;
    public latestSnapshot: CameraSnapshot;
    public snapshotsGranularity: string;
    public snapshots: CameraSnapshot[];

}

export class CameraSnapshot {

    public timestamp: number;
    public uri: string;

}

export class StorageInfo {

    public freeBytes: number;
    public totalBytes: number;
    public snapshotCount: number;
    public videoCount: number;

}
