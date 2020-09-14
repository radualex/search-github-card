import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./Search/search.component";
import { ShortcutComponent } from "./Shortcut/shortcut.component";
import { RecentSearchItemComponent } from "./RecentSearchItem/r-search-item.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShortcutComponent,
    RecentSearchItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
