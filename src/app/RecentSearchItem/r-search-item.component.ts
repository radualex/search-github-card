import { Component, Input } from "@angular/core";

@Component({
  selector: "recent-search-item",
  templateUrl: "./r-search-item.component.html",
  styleUrls: ["./r-search-item.component.css"]
})
export class RecentSearchItemComponent {
  @Input() text: string;
}
