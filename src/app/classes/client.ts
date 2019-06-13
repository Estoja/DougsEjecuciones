export class Client {
    private _name: String;
    private _image: {url: String, description: String, width: String, height: String};
    private _urlPage: String;

    constructor(name: String, image: {url: String, description: String, width: String, height: String}, urlPage: String) {
        this._image = image;
        this._name = name;
        this._urlPage = urlPage;
    }

    get name() { return this._name }
    get image() { return this._image }
    get urlPage() { return this._urlPage }
}
