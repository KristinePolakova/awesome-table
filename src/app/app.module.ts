import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { CloudsComponent } from './clouds/clouds.component';
import { MatTableModule} from '@angular/material/table';
import { UserTableComponent } from './usertable/usertable.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './usertable/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    CloudsComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
