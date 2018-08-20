import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { urls } from "../../app/constants";

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Service {
    constructor(private _http: Http) {

    }

    // Fetch json from backend
    fetchLatestBlogPost(): Observable<any> {
        return this._http.get(urls.FETCH_LATEST_POST)
        .pipe(map(element => element.json()));
    }

    // Fetching author details
    fetchAuthorDetails(): Observable<any> {
        return this._http.get(urls.FETCH_AUTHOR_DETAILS)
        .pipe(map(element => element.json()));

    }

    // fetching a particular post
    fetchParticularPost(postId: number): Observable<any> {
        let url = urls.FETCH_PARTICULAR_POST + postId;
        return this._http.get(url)
        .pipe(map(element => element.json()));
    }
} 