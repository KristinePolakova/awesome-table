import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { CloudsComponent } from './clouds/clouds.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TableService } from './table/table.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    CloudsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
