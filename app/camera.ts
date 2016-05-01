
export class Camera {

	constructor(
		private _id: number,
		private _name: string,
		private _url: string,
		private _route: string) { }

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public get url(): string {
		return this._url;
	}

	public get route(): string {
		return this._route;
	}


}