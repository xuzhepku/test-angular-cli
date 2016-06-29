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
    private _githubUserApi = "https://api.github.com/users/octocat";
    private _githubFollowersApi = "https://api.github.com/users/octocat/followers";

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

    getUser() {
        return this._http.get(this._githubUserApi)
            .map(res => res.json());
    }

    getFollowers() {
        return this._http.get(this._githubFollowersApi)
            .map(res => res.json());
    }
}