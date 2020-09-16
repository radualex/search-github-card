import { Injectable } from "@angular/core";
// import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";
import { debounceTime, switchMap, distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class SearchService {
  baseUrl: string = "";

  // constructor(private http: Http) {}

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchEntries(term))
    );
  }

  searchEntries(term: string) {
    return term;
    // return this.http
    //     .get(this.baseUrl + this.queryUrl + term)
    //     .map(res => res.json());
  }
}
