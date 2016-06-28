import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
/**
 * PostService
 */
@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {

    }

    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    createPost(post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}