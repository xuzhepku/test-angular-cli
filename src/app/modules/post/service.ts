import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Post } from './model';
/**
 * PostService
 */
@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {

    }

    getPosts(): Promise<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }

    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}