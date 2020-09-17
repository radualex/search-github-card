import { Component } from "@angular/core";
import { SearchService } from "../Services/search.service";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "search-card",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SearchService]
})
export class SearchComponent {
  shortcuts = [
    {
      icon: "message",
      text: "Messages",
      color: "#F9EFFA"
    },
    {
      icon: "attachment",
      text: "Attachments",
      color: "#E6F6F2"
    },
    {
      icon: "people",
      text: "People",
      color: "#F4F3FD"
    }
  ];

  searchTerm = new Subject<string>();
  recentSearchItems = [];

  constructor(private searchService: SearchService) {
    // this.searchTerm.pipe(debounceTime(400)).subscribe((term: string) => {
    //   this._setRecentSearchItem(term);
    // });

    this.searchService.search(this.searchTerm).subscribe((results) => {
      console.log(results);
    });
  }

  _setRecentSearchItem(term: string) {
    const length: number = this.recentSearchItems.length;
    if (length !== 0) {
      const lastItem = this.recentSearchItems[0];
      const termIsValid: boolean = lastItem.text.length > 1 && term.length > 1;
      if (termIsValid) {
        if (length === 3) {
          this.recentSearchItems.shift();
          this._pushItemToArray(term);
        } else {
          this._pushItemToArray(term);
        }
      }
    } else {
      this._pushItemToArray(term);
    }
  }

  _pushItemToArray(term: string) {
    this.recentSearchItems.push({ text: term });
  }

  handleOnClick(index: number) {
    this.recentSearchItems.splice(index, 1);
  }
}
