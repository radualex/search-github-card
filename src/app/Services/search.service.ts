import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  map
} from "rxjs/operators";

@Injectable()
export class SearchService {
  baseUrl: string = "https://api.github.com/search/repositories?q=";

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchEntries(term))
    );
  }

  searchEntries(term: string) {
    return this.http.get(`${this.baseUrl}${term}`).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
}
