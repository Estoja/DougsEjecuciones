export class ToolbarItems {
    private _title_: String;
    private _route_: String;

    constructor(title, route) {
        this._title_ = title;
        this._route_ = route;
    }

    get title() { return this._title_ }
    get route() { return this._route_ }

}
