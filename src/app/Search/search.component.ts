import { Component } from "@angular/core";

@Component({
  selector: "search-card",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
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

  recentSearchItem = "exports";
}
