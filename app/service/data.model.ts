
export class DataModel {

	public version: string;
	public dashletInfo: DashletDataModel[];
	public chartInfo: ChartSeriesDataModel[];

}

export class DashletDataModel {

	public dashletId: string;
	public value: string;
	public unit: string;

}

export class ChartSeriesDataModel {

	public latestUpdate: number;
	public data: [number, number];

}
