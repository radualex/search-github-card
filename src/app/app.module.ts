import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./Search/search.component";
import { ShortcutComponent } from "./Shortcut/shortcut.component";

@NgModule({
  declarations: [AppComponent, SearchComponent, ShortcutComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
