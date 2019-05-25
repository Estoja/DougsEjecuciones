export class ToolbarItems {
    private _title_: String;
    private _route_: String;
    private _icon_: String;

    constructor(title, route, icon) {
        this._title_ = title;
        this._route_ = route;
        this._icon_ = icon;
    }

    get title() { return this._title_ }
    get route() { return this._route_ }
    get icon() { return this._icon_ }

}
